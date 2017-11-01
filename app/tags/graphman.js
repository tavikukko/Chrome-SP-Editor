riot.tag("graphman", `
<div id="page-content-wrapper">
  <h4>Graph Man</h4>

  <img if="{ user.name.length < 1 }" onclick="{ login }" id="ms-signin-button" src="img/MSSignInButton.svg"></img>

  <div if="{ user.name.length > 0 }">
    <div>
      <i class="fa fa-user-md"></i> { this.user.name }
      </div>
      <div>
      <i class="fa fa-envelope"></i>  { this.user.displayableId }
    </div>
    <hr>

    <div class="signout">
      <span class="faa-parent animated-hover" style="cursor: pointer;" onclick="{ logout }">
        <i class="fa fa-sign-out fa-2x permission-no faa-pulse" style="vertical-align: middle;"></i>&nbsp;&nbsp;Sign out
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span class="faa-parent animated-hover" style="cursor: pointer;" onclick="{ openDlg }">
        <i if="{ user.name.length > 0 }" class="fa fa-check-square-o fa-2x permission-yes faa-pulse" style=" vertical-align: middle;"></i>&nbsp;&nbsp;Modify permissions
      </span>
    </div>
  </div>

<!-- modal -->
<div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" >
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
			<h3 class="modal-title" id="lineModalLabel">Scopes</h3>
		</div>
		<div class="modal-body">
      <form>
        <div class="form-group">
          <div class="checkbox" each="{ permission, index in permissionScope }">
            <label title="{ permission.longDescription }" onchange="{ select }" class="checkbox"><input type="checkbox" disabled="{ permission.granted }" checked="{ permission.granted }" value="{ permission.name }"><i class="fa { permission.admin ? ' fa-minus-circle permission-no' : ' fa-check-circle permission-yes' }"></i> { permission.name }</label>
          </div>
        </div>
      </form>
		</div>
		<div class="modal-footer">
			<div class="btn-group btn-group-justified" role="group" aria-label="group button">
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" data-dismiss="modal"  role="button">Close</button>
				</div>
				<div class="btn-group btn-delete hidden" role="group">
					<button type="button" id="delImage" class="btn btn-default btn-hover-red" data-dismiss="modal" onclick="{ logout }" role="button">Delete</button>
				</div>
				<div class="btn-group" role="group">
					<button type="button" id="saveImage" class="btn btn-default btn-hover-green" onclick="{ acquireTokenPopup }" role="button">Save</button>
				</div>
			</div>
		</div>
	</div>
  </div>
</div>
<!-- /modal -->
`,
  function (opts) {

    // make graph explorer clone :)
    // add monaco editor to show results of query
    this.user = {
      name: "",
      displayableId: ""
    };

    this.token = "";
    this.selectedPermissions = [];
    this.grantedPermissions = [];

    this.on("mount", function () {
      this.init();
    });

    this.openDlg = function () {
      $('#squarespaceModal').modal('show');
    }

    this.select = function (e) {
      const index = this.selectedPermissions.indexOf(e.item.permission.name);
      if (index !== -1) this.selectedPermissions.splice(index, 1);
      else this.selectedPermissions.push(e.item.permission.name)
      this.update();
    }.bind(this);

    this.init = function () {
    }.bind(this);

    this.logout = function (e) {
      userAgentApplication.clearCache();
      this.user.name = "";
      this.user.displayableId = "";
      this.token = "";
      graphmantoken = "";
      this.update();
    }.bind(this);

    this.login = function (e) {
      userAgentApplication.loginPopup(["User.Read"]).then(function (token) {

        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var decodedToken = JSON.parse(window.atob(base64));
        this.user.name = decodedToken.name;
        this.user.displayableId = decodedToken.upn;
        this.token = token;
        graphmantoken = token;

        var grantedScopes = decodedToken.scp.split(' ');
        grantedScopes.forEach(function (granted) {
          this.permissionScope.forEach(function (scope) {
            if (!scope.granted) {
              if (scope.name == granted) scope.granted = true;
              else scope.granted = false;
            }
          }.bind(this))
        }.bind(this));

        this.update();
      }.bind(this));
    }.bind(this);

    this.acquireTokenPopup = function () {
      if (this.selectedPermissions.length < 1) {
        alert("Select at least 1 permission scope!")
        return
      }
      userAgentApplication.loginPopup(this.selectedPermissions).then(function (token) {
        //console.log(userAgentApplication);
        $('#squarespaceModal').modal('hide');
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var decodedToken = JSON.parse(window.atob(base64));
        this.user.name = decodedToken.name;
        this.user.displayableId = decodedToken.upn;
        this.token = token;
        graphmantoken = token;

        var grantedScopes = decodedToken.scp.split(' ');
        grantedScopes.forEach(function (granted) {
          this.permissionScope.forEach(function (scope) {
            if (!scope.granted) {
              if (scope.name == granted) scope.granted = true;
              else scope.granted = false;
            }
          }.bind(this))
        }.bind(this));

        this.update();
      }.bind(this), function (error) {
        console.log("Failure acquiring token: " + error);
      }.bind(this));
    }.bind(this);

    this.permissionScope = [
      {
        name: "Calendars.Read",
        description: "Read user calendars",
        longDescription: "Allows the app to read events in user calendars.",
        preview: false,
        admin: false,
      },
      {
        name: "Calendars.Read.Shared",
        description: "Read user and shared calendars",
        longDescription: "Allows the app to read events in all calendars that the user can access, including delegate and shared calendars.",
        preview: false,
        admin: false,
      },
      {
        name: "Calendars.ReadWrite",
        description: "Have full access to user calendars",
        longDescription: "Allows the app to create, read, update, and delete events in user calendars.",
        preview: false,
        admin: false,
      },
      {
        name: "Calendars.ReadWrite.Shared",
        description: "Read and write user and shared calendars",
        longDescription: "Allows the app to create, read, update and delete events in all calendars the user has permissions to access. This includes delegate and shared calendars.",
        preview: false,
        admin: false,
      },
      {
        name: "Contacts.Read",
        description: "Read user contacts",
        longDescription: "Allows the app to read user contacts.",
        preview: false,
        admin: false,
      },
      {
        name: "Contacts.Read.Shared",
        description: "Read user and shared contacts",
        longDescription: "Allows the app to read contacts that the user has permissions to access, including the user's own and shared contacts.",
        preview: false,
        admin: false,
      },
      {
        name: "Contacts.ReadWrite",
        description: "Have full access to user contacts",
        longDescription: "Allows the app to create, read, update, and delete user contacts.",
        preview: false,
        admin: false,
      },
      {
        name: "Contacts.ReadWrite.Shared",
        description: "Read and write user and shared contacts",
        longDescription: "Allows the app to create, read, update and delete contacts that the user has permissions to, including the user's own and shared contacts.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.Read",
        description: "Read user files and files shared with user",
        longDescription: "Allows the app to read the signed-in user's files and files shared with the user.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.Read.All",
        description: "Read all files that user can access",
        longDescription: "Allows the app to read all files the signed-in user can access.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.Read.Selected",
        description: "Read files that the user selects",
        longDescription: "Allows the app to read files that the user selects. The app has access for several hours after the user selects a file.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.ReadWrite",
        description: "Have full access to user files and files shared with user",
        longDescription: "Allows the app to read, create, update and delete the signed-in user's files and files shared with the user.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.ReadWrite.All",
        description: "Have full access to all files user can access",
        longDescription: "Allows the app to read, create, update and delete all files the signed-in user can access.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.ReadWrite.AppFolder",
        description: "Have full access to the application's folder",
        longDescription: "Allows the app to read, create, update and delete files in the application's folder.",
        preview: false,
        admin: false,
      },
      {
        name: "Files.ReadWrite.Selected",
        description: "Read and write files that the user selects",
        longDescription: "Allows the app to read and write files that the user selects. The app has access for several hours after the user selects a file.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.Read",
        description: "Read user mail",
        longDescription: "Allows the app to read email in user mailboxes.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.Read.Shared",
        description: "Read user and shared mail",
        longDescription: "Allows the app to read mail that the user can access, including the user's own and shared mail.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.ReadWrite",
        description: "Read and write access to user mail",
        longDescription: "Allows the app to create, read, update, and delete email in user mailboxes. Does not include permission to send mail.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.ReadWrite.Shared",
        description: "Read and write user and shared mail",
        longDescription: "Allows the app to create, read, update, and delete mail that the user has permission to access, including the user's own and shared mail. Does not include permission to send mail.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.Send",
        description: "Send mail as a user",
        longDescription: "Allows the app to send mail as users in the organization.",
        preview: false,
        admin: false,
      },
      {
        name: "Mail.Send.Shared",
        description: "Send mail on behalf of others",
        longDescription: "Allows the app to send mail as the signed-in user, including sending on-behalf of others.",
        preview: false,
        admin: false,
      },
      {
        name: "MailboxSettings.ReadWrite",
        description: "Read and write user mailbox settings",
        longDescription: "Allows the app to create, read, update, and delete user's mailbox settings. Does not include permission to send mail.",
        preview: false,
        admin: false,
      },
      {
        name: "offline_access",
        description: "Access user's data anytime (preview)",
        longDescription: "Allows the app to read and update user data, even when they are not currently using the app.",
        preview: false,
        admin: false,
      },
      {
        name: "openid",
        description: "Sign users in (preview)",
        longDescription: "Allows users to sign in to the app with their work or school accounts and allows the app to see basic user profile information.",
        preview: false,
        admin: false,
      },
      {
        name: "User.Read",
        description: "Sign-in and read user profile",
        longDescription: "Allows users to sign-in to the app, and allows the app to read the profile of signed-in users. The full profile includes all of the declared properties of the User entity. The app cannot read navigation properties, such as manager or direct reports. Also allows the app to read the following basic company information of the signed-in user (through the TenantDetail object): tenant ID, tenant display name, and verified domains.",
        preview: false,
        admin: false,
      },
      {
        name: "User.ReadWrite",
        description: "Read and write access to user profile",
        longDescription: "Allows the app to read your profile. It also allows the app to update your profile information on your behalf.",
        preview: false,
        admin: false,
      },
      {
        name: "User.ReadBasic.All",
        description: "Read all user's basic profiles",
        longDescription: "Allows the app to read the basic profile of all users in the organization on behalf of the signed-in user. The following properties comprise a user’s basic profile: display name, first and last name, photo, and email address. To read the groups that a user is a member of, the app will also require Group.Read.All or Group.ReadWrite.All.",
        preview: false,
        admin: false,
      },
      {
        name: "Notes.Create",
        description: "Create pages in users' notebooks (preview)",
        longDescription: "Allows the app to read the titles of notebooks and sections and create new pages, notebooks and sections on behalf of the signed-in user.",
        preview: true,
        admin: false,
      },
      {
        name: "Notes.Read",
        description: "Read user notebooks (preview)",
        longDescription: "Allows the app to view the titles of OneNote notebooks and sections and to read all pages on behalf of the signed-in user. It cannot view password protected sections.",
        preview: true,
        admin: false,
      },
      {
        name: "Notes.Read.All",
        description: "Read all notebooks that the user can access (preview)",
        longDescription: "Allows the app to read the contents of all notebooks and sections that the signed-in user can access. It cannot read password protected sections.",
        preview: true,
        admin: false,
      },
      {
        name: "Notes.ReadWrite",
        description: "Read and write user notebooks (preview)",
        longDescription: "Allows the app to read the titles of notebooks and sections, read all pages, write all pages and create new pages on behalf of the signed-in user.  It cannot access password protected sections.",
        preview: true,
        admin: false,
      },
      {
        name: "Notes.ReadWrite.All",
        description: "Read and write notebooks that the user can access (preview)",
        longDescription: "Allows the app to read and write the contents of all notebooks and sections that the signed-in user can access. It cannot access password protected sections.",
        preview: true,
        admin: false,
      },
      {
        name: "Notes.ReadWrite.CreatedByApp",
        description: "Limited notebook access (preview)",
        longDescription: "Allows the app to read the titles of notebooks and sections, create new pages on behalf of the signed-in user. Also allows the app to read and update pages created by the app.",
        preview: true,
        admin: false,
      },
      {
        name: "People.Read",
        description: "Read users' relevant people lists (preview)",
        longDescription: "Allows the app to read a ranked list of relevant people of the signed-in user. The list includes local contacts, contacts from social networking, your organization's directory, and people from recent communications (such as email and Skype).",
        preview: true,
        admin: false,
      },
      {
        name: "Sites.Read.All",
        description: "Read items in all site collections",
        longDescription: "Allows the application to read documents and list items in all site collections on behalf of the signed-in user.",
        preview: true,
        admin: false,
      },
      {
        name: "Sites.ReadWrite.All",
        description: "Read and write items in all site collections",
        longDescription: "Allows the application to edit or delete documents and list items in all site collections on behalf of the signed-in user.",
        preview: true,
        admin: false,
      },
      {
        name: "Tasks.Read",
        description: "Read user tasks",
        longDescription: "Allows the app to read user tasks.",
        preview: true,
        admin: false,
      },
      {
        name: "Tasks.Read.Shared",
        description: "Read user and shared tasks",
        longDescription: "Allows the app to read tasks a user has permissions to access, including their own and shared tasks.",
        preview: true,
        admin: false,
      },
      {
        name: "Tasks.ReadWrite",
        description: "Create, read, update and delete user tasks and plans (preview)",
        longDescription: "Allows the app to create, read, update and delete tasks and plans (and tasks in them), that are assigned to or shared with the signed-in user.",
        preview: true,
        admin: false,
      },
      {
        name: "Tasks.ReadWrite.Shared",
        description: "Read and write user and shared tasks",
        longDescription: "Allows the app to create, read, update, and delete tasks a user has permissions to, including their own and shared tasks.",
        preview: true,
        admin: false,
      },
      {
        name: "Device.Read",
        preview: true,
        admin: false,
        description: "",
        longDescription: "",
      },
      {
        name: "Device.Command",
        preview: true,
        admin: false,
        description: "",
        longDescription: "",
      },
      {
        name: "Directory.AccessAsUser.All",
        description: "Access directory as the signed-in user",
        longDescription: "Allows the app to have the same access to information in the directory as the signed-in user.",
        preview: false,
        admin: true,
      },
      {
        name: "Directory.Read.All",
        description: "Read directory data",
        longDescription: "Allows the app to read data in your organization's directory, such as users, groups and apps.",
        preview: false,
        admin: true,
      },
      {
        name: "Directory.ReadWrite.All",
        description: "Read and write directory data",
        longDescription: "Allows the app to read and write data in your organization's directory, such as users, and groups. Does not allow user or group deletion. It does not allow the app to delete users or groups, or reset user passwords.",
        preview: false,
        admin: true,
      },
      {
        name: "Group.Read.All",
        description: "Read all groups",
        longDescription: "Allows the app to list groups, and to read their properties and all group memberships on behalf of the signed-in user. Also allows the app to read calendar, conversations, files, and other group content for all groups the signed-in user can access.",
        preview: false,
        admin: true,
      },
      {
        name: "Group.ReadWrite.All",
        description: "Read and write all groups",
        longDescription: "Allows the app to create groups and read all group properties and memberships on behalf of the signed-in user. Additionally allows group owners to manage their groups and allows group members to update group content.",
        preview: false,
        admin: true,
      },
      {
        name: "User.Read.All",
        description: "Read all user's full profiles",
        longDescription: "Same as User.ReadBasic.All, except that it allows the app to read the full profile of all users in the organization and when reading navigation properties like manager and direct reports. The full profile includes all of the declared properties of the User entity. To read the groups that a user is a member of, the app will also require either Group.Read.All or Group.ReadWrite.All.",
        preview: false,
        admin: true,
      },
      {
        name: "User.ReadWrite.All",
        description: "Read and write all user's full profiles",
        longDescription: "Allows the app to read and write the full set of profile properties, reports, and managers of other users in your organization, on behalf of the signed-in user.",
        preview: false,
        admin: true,
      },
      {
        name: "IdentityRiskEvent.Read.All",
        description: "Read identity risk event information (preview)",
        longDescription: "Allows the app to read identity risk event information for all users in your organization on behalf of the signed-in user.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementServiceConfig.Read.All",
        description: "Read Microsoft Intune configuration (preview)",
        longDescription: "Allows the app to read Microsoft Intune service properties including device enrollment and third party service connection configuration.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementServiceConfig.ReadWrite.All",
        description: "Read and write Microsoft Intune configuration (preview)",
        longDescription: "Allows the app to read and write Microsoft Intune service properties including device enrollment and third party service connection configuration.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementConfiguration.Read.All",
        description: "Read Microsoft Intune device configuration and policies (preview)",
        longDescription: "Allows the app to read properties of Microsoft Intune-managed device configuration and device compliance policies and their assignment to groups.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementConfiguration.ReadWrite.All",
        description: "Read and write Microsoft Intune device configuration and policies (preview)",
        longDescription: "Allows the app to read and write properties of Microsoft Intune-managed device configuration and device compliance policies and their assignment to groups.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementApps.Read.All",
        description: "Read Microsoft Intune apps (preview)",
        longDescription: "Allows the app to read the properties, group assignments and status of apps, app configurations and app protection policies managed by Microsoft Intune.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementApps.ReadWrite.All",
        description: "Read and write Microsoft Intune apps (preview)",
        longDescription: "Allows the app to read and write the properties, group assignments and status of apps, app configurations and app protection policies managed by Microsoft Intune.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementRBAC.Read.All",
        description: "Read Microsoft Intune RBAC settings (preview)",
        longDescription: "Allows the app to read the properties relating to the Microsoft Intune Role-Based Access Control (RBAC) settings.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementRBAC.ReadWrite.All",
        description: "Read and write Microsoft Intune RBAC settings (preview)",
        longDescription: "Allows the app to read and write the properties relating to the Microsoft Intune Role-Based Access Control (RBAC) settings.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementManagedDevices.Read.All",
        description: "Read Microsoft Intune devices (preview)",
        longDescription: "Allows the app to read the properties of devices managed by Microsoft Intune.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementManagedDevices.ReadWrite.All",
        description: "Read and write Microsoft Intune devices (preview)",
        longDescription: "Allows the app to read and write the properties of devices managed by Microsoft Intune. Does not allow high impact operations such as remote wipe and password reset on the device’s owner.",
        preview: true,
        admin: true,
      },
      {
        name: "DeviceManagementManagedDevices.PrivilegedOperations.All",
        description: "Perform user-impacting remote actions on Microsoft Intune devices (preview)",
        longDescription: "Allows the app to perform remote high impact actions such as wiping the device or resetting the passcode on devices managed by Microsoft Intune.",
        preview: true,
        admin: true
      },
      {
        name: "Reports.Read.All",
        description: "Read all usage reports",
        longDescription: "Allows an app to read all service usage reports without a signed-in user. Services that provide usage reports include Office 365 and Azure Active Directory.",
        preview: true,
        admin: true
      }
    ];

    // POST here --> https://apps.dev.microsoft.com/api/permissionsForResource
    var ScopesFromPortal = [
      { description: "Allows the app to read and write the properties re…Intune Role-Based Access Control (RBAC) settings.", id: "0c5e8a55-87a6-4556-93ab-adc52c4d862d", name: "DeviceManagementRBAC.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to have the same access to information in the directory as the signed-in user.", id: "0e263e50-5827-48a4-b97c-d940288653c7", name: "Directory.AccessAsUser.All", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete events in user calendars. ", id: "1ec239c2-d7c9-4623-a91a-a9775856bb36", name: "Calendars.ReadWrite", type: "User" },
      { description: "Allows an app to read all service usage reports on…ts include Office 365 and Azure Active Directory.", id: "02e97553-ed7b-43d0-ab3c-f8bace0d040c", name: "Reports.Read.All", type: "Admin" },
      { description: "Allows the app to read events in all calendars tha… access, including delegate and shared calendars.", id: "2b9c4092-424d-4249-948d-b43879977640", name: "Calendars.Read.Shared", type: "User" },
      { description: "Allows the app to read and write assignments without grades on behalf of the user.", id: "2ef770a1-622a-47c4-93ee-28d6adbed3a0", name: "EduAssignments.ReadWriteBasic", type: "Admin" },
      { description: "Allows the app to read and write assignments and their grades on behalf of the user.", id: "2f233e90-164b-4501-8bce-31af2559a2d3", name: "EduAssignments.ReadWrite", type: "Admin" },
      { description: "Allows the app to create groups and read all group…and allows group members to update group content.", id: "4e46008b-f24c-477d-8fff-7bb4ec7aafe0", name: "Group.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to read the properties, group assig… protection policies managed by Microsoft Intune.", id: "4edf5f54-4666-44af-9de9-0144fb4b6e8c", name: "DeviceManagementApps.Read.All", type: "Admin" },
      { description: "Allows the app to read, create, update and delete the signed-in user's files.", id: "5c28f0bf-8a70-41f1-8ab2-9032436ddb65", name: "Files.ReadWrite", type: "User" },
      { description: "Allows the app to read a limited subset of the pro… status, education role, email address and photo.", id: "5d186531-d1bf-4f07-8cea-7c42119e1bd9", name: "EduRoster.ReadBasic", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete…d mail. Does not include permission to send mail.", id: "5df07973-7d5d-46ed-9847-1271055cbd51", name: "Mail.ReadWrite.Shared", type: "User" },
      { description: "Allows the app to list groups, and to read their p…nt for all groups the signed-in user can access. ", id: "5f8c59db-677d-491f-a6b8-5f174b11ec1d", name: "Group.Read.All", type: "Admin" },
      { description: "Allows the app to read data in your organization's directory, such as users, groups and apps.", id: "06da0dbc-49e2-44d2-8312-53f166ab848a", name: "Directory.Read.All", type: "Admin" },
      { description: "Allows the app to read and write the properties, g… protection policies managed by Microsoft Intune.", id: "7b3f05d5-f68c-4b8d-8c59-a2ecd12f24af", name: "DeviceManagementApps.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to read mail a user can access, including their own and shared mail.", id: "7b9103a5-4610-446b-9670-80643382c1fa", name: "Mail.Read.Shared", type: "User" },
      { description: "Allows the app to read identity risk event informa…ur organization on behalf of the signed-in user. ", id: "8f6a01e7-0391-4ee5-aa22-a3af122cef27", name: "IdentityRiskEvent.Read.All", type: "Admin" },
      { description: "Allows the app to read the titles of OneNote noteb…ks, and sections on behalf of the signed-in user.", id: "9d822255-d64d-4b7a-afdb-833b9a97ed02", name: "Notes.Create", type: "User" },
      { description: "Allows the app to read a user's list of devices on behalf of the signed-in user.", id: "11d4cd79-5ba5-460f-803f-e22c8ab85ccd", name: "Device.Read", type: "User" },
      { description: "Allows the app to see your users' basic profile (name, picture, user name)", id: "14dad69e-099b-42c9-810b-d002981feec1", name: "profile", type: "User" },
      { description: "(Preview) Allows the app to read and write files t… for several hours after the user selects a file.", id: "17dde5bd-8c17-420f-a486-969730c1b827", name: "Files.ReadWrite.Selected", type: "User" },
      { description: "Allows the app to create, read, update, and delete…boxes. Does not include permission to send mail. ", id: "024d486e-b451-40bb-833d-3e66d98c5c73", name: "Mail.ReadWrite", type: "User" },
      { description: "Allows users to sign in to the app with their work…ws the app to see basic user profile information.", id: "37f7f235-527c-4136-accd-4a02d197296e", name: "openid", type: "User" },
      { description: "Allows the app to read the properties relating to …Intune Role-Based Access Control (RBAC) settings.", id: "49f0cc30-024c-4dfd-ab3e-82e137ee5431", name: "DeviceManagementRBAC.Read.All", type: "Admin" },
      { description: "Allows the app to invite guest users to the organization, on behalf of the signed-in user.", id: "63dd7cd9-b489-4adf-a28c-ac38b9a0f962", name: "User.Invite.All", type: "Admin" },
      { description: "Allows the app to read your users' primary email address", id: "64a6cdd6-aab1-4aaf-94b8-3cc8405e90d0", name: "email", type: "User" },
      { description: "Allows the app to read, share, and modify OneNote …signed-in user has access to in the organization.", id: "64ac0503-b4fa-45d9-b544-71a463f05da0", name: "Notes.ReadWrite.All", type: "User" },
      { description: "Allows the app to the read user's mailbox settings. Does not include permission to send mail.", id: "87f447af-9fa4-4c32-9dfa-4a57a73d18ce", name: "MailboxSettings.Read", type: "User" },
      { description: "Allows the app to read tasks a user has permissions to access, including their own and shared tasks.", id: "88d21fd4-8e5a-4c32-b5e2-4a1c95f34f72", name: "Tasks.Read.Shared", type: "User" },
      { description: "Allows the application to edit or delete documents…site collections on behalf of the signed-in user.", id: "89fe6a52-be36-487e-b7d8-d061c450a026", name: "Sites.ReadWrite.All", type: "User" },
      { description: "Allows the app to read and write the full set of p…ur organization, on behalf of the signed-in user.", id: "204e0828-b5ca-4ad8-b9f3-f32a958e7cc4", name: "User.ReadWrite.All", type: "Admin" },
      { description: "Allows the application to read documents and list … site collections on behalf of the signed-in user", id: "205e70e5-aba6-4c52-a976-6d2d46c48043", name: "Sites.Read.All", type: "User" },
      { description: "Allows the app to read contacts a user has permiss… access, including their own and shared contacts.", id: "242b9d9e-ed24-4d09-9a52-f43769beb9d4", name: "Contacts.Read.Shared", type: "User" },
      { description: "Allows the app to read and write the structure of …ers to be read and written on behalf of the user.", id: "359e19a6-e3fa-4d7f-bcab-d28ec592b51e", name: "EduRoster.ReadWrite", type: "Admin" },
      { description: "Allows the app to read events in user calendars . ", id: "465a38f9-76ea-45b9-9f34-9e8b0d4b0b42", name: "Calendars.Read", type: "User" },
      { description: "Allows the app to read, share, and modify OneNote notebooks on behalf of the signed-in user.", id: "615e26af-c38a-4150-ae3e-c3b0d4cb1d6a", name: "Notes.ReadWrite", type: "User" },
      { description: "Allows the app to read and write Microsoft Intune …and third party service connection configuration.", id: "662ed50a-ac44-4eef-ad86-62eed9be2a29", name: "DeviceManagementServiceConfig.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete…ttings. Does not include permission to send mail.", id: "818c620a-27a9-40bd-a6a5-d96f7d610b4b", name: "MailboxSettings.ReadWrite", type: "User" },
      { description: "Allows the app to read and write properties of Mic…mpliance policies and their assignment to groups.", id: "0883f392-0a7a-443d-8c76-16a6d39c7b63", name: "DeviceManagementConfiguration.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to perform remote high impact actio… passcode on devices managed by Microsoft Intune.", id: "3404d2bf-2b13-457e-a330-c24615765193", name: "DeviceManagementManagedDevices.PrivilegedOperations.All", type: "Admin" },
      { description: "(Preview) Allows the app to read files that the us… for several hours after the user selects a file.", id: "5447fe39-cb82-4c1a-b977-520e67e724eb", name: "Files.Read.Selected", type: "User" },
      { description: "Allows the app to read and update user data, even when they are not currently using the app.", id: "7427e0e9-2fba-42fe-b0c0-848c9e6a8182", name: "offline_access", type: "User" },
      { description: "(Preview) Allows the app to read, create, update and delete files in the application's folder.", id: "8019c312-3263-48e6-825e-2b833497195b", name: "Files.ReadWrite.AppFolder", type: "User" },
      { description: "Allows the app to read Microsoft Intune service pr…and third party service connection configuration.", id: "8696daa5-bce5-4b2e-83f9-51b6defc4e1e", name: "DeviceManagementServiceConfig.Read.All", type: "Admin" },
      { description: "Allows the app to read and write the properties of…te wipe and password reset on the device’s owner.", id: "44642bfe-8385-4adc-8fc6-fe3cb2c375c3", name: "DeviceManagementManagedDevices.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to read assignments and their grades on behalf of the user.", id: "091460c9-9c4a-49b2-81ef-1f3d852acce2", name: "EduAssignments.Read", type: "Admin" },
      { description: "Allows the app to read the properties of devices managed by Microsoft Intune.", id: "314874da-47d6-4978-88dc-cf0d37f0bb82", name: "DeviceManagementManagedDevices.Read.All", type: "Admin" },
      { description: "Allows the app to report the signed-in user's app activity information to Microsoft Timeline.", id: "367492fc-594d-4972-a9b5-0d58c622c91c", name: "UserTimelineActivity.Write.CreatedByApp", type: "User" },
      { description: "Allows the app to read OneNote notebooks on behalf of the signed-in user.", id: "371361e4-b9e2-4a3f-8315-2a301a3b0a3d", name: "Notes.Read", type: "User" },
      { description: "Allows the app to read email in user mailboxes. ", id: "570282fd-fa5c-430d-a7fd-fc8dc98a9dca", name: "Mail.Read", type: "User" },
      { description: "Allows the app to read, create, update and delete all files the signed-in user can access.", id: "863451e7-0667-486c-a5d6-d135439485f0", name: "Files.ReadWrite.All", type: "User" },
      { description: "Allows the app to create, read, update and delete …re assigned to or shared with the signed-in user.", id: "2219042f-cab5-40cc-b0d2-16b1540b4c5f", name: "Tasks.ReadWrite", type: "User" },
      { description: "Read the state and settings of all Microsoft education apps on behalf of the user.", id: "8523895c-6081-45bf-8a5d-f062a2f12c9f", name: "EduAdministration.Read", type: "Admin" },
      { description: "Allows the app to read the signed-in user's files.", id: "10465720-29dd-4523-a11a-6a75c743c9d9", name: "Files.Read", type: "User" },
      { description: "Allows the app to create, read, update and delete …ess. This includes delegate and shared calendars.", id: "12466101-c9b8-439a-8589-dd09ee67e8e9", name: "Calendars.ReadWrite.Shared", type: "User" },
      { description: "Manage the state and settings of all Microsoft education apps on behalf of the user.", id: "63589852-04e3-46b4-bae9-15d5b1050748", name: "EduAdministration.ReadWrite", type: "Admin" },
      { description: "Allows the app to read the full set of profile pro…ur organization, on behalf of the signed-in user.", id: "a154be20-db9c-4678-8ab7-66f6cc099a59", name: "User.Read.All", type: "Admin" },
      { description: "Allows the app to send mail as the signed-in user, including sending on-behalf of others.", id: "a367ab51-6b49-43bf-a716-a1fb06d2a174", name: "Mail.Send.Shared", type: "User" },
      { description: "Allows the app to read the structure of schools an…ion about users to be read on behalf of the user.", id: "a4389601-22d9-4096-ac18-36a927199112", name: "EduRoster.Read", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete…ions to, including their own and shared contacts.", id: "afb6c84b-06be-49af-80bb-8f3f77004eab", name: "Contacts.ReadWrite.Shared", type: "User" },
      { description: "Allows the app to read your profile. It also allow…o update your profile information on your behalf.", id: "b4e74841-8e56-480b-be8b-910348b18b4c", name: "User.ReadWrite", type: "User" },
      { description: "Allows the app to read a scored list of relevant p… recent communications (such as email and Skype).", id: "b89f9189-71a5-4e70-b041-9887f0bc7e4a", name: "People.Read.All", type: "Admin" },
      { description: "Allows the app to read a basic set of profile prop…me, first and last name, email address and photo.", id: "b340eb25-3456-403f-be2f-af7a0d370277", name: "User.ReadBasic.All", type: "User" },
      { description: "Allows the app to read a ranked list of relevant p… recent communications (such as email and Skype).", id: "ba47897c-39ec-4d83-8086-ee8256fa737d", name: "People.Read", type: "User" },
      { description: "Allows the app to launch another app or communicat… a user's device on behalf of the signed-in user.", id: "bac3b9c2-b516-4ef4-bd3b-c2ef73d8d804", name: "Device.Command", type: "User" },
      { description: "Allows the app to read assignments without grades on behalf of the user.", id: "c0b0103b-c053-4b2e-9973-9f3a544ec9b8", name: "EduAssignments.ReadBasic", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete…issions to, including their own and shared tasks.", id: "c5ddf11b-c114-4886-8558-8a4e557cd52b", name: "Tasks.ReadWrite.Shared", type: "User" },
      { description: "Allows the app to read and write data in your orga… delete users or groups, or reset user passwords.", id: "c5366453-9fb0-48a5-a156-24f0c49a4b84", name: "Directory.ReadWrite.All", type: "Admin" },
      { description: "Allows the app to create, read, update, and delete user contacts. ", id: "d56682ec-c09e-4743-aaf4-1a3aac4caa21", name: "Contacts.ReadWrite", type: "User" },
      { description: "Allows the app to read all files the signed-in user can access.", id: "df85f4d6-205c-4ac5-a5ea-6bf408dba283", name: "Files.Read.All", type: "User" },
      { description: "Allows the app to read OneNote notebooks that the signed-in user has access to in the organization.", id: "dfabfca6-ee36-4db2-8208-7a28381419b3", name: "Notes.Read.All", type: "User" },
      { description: "Allows users to sign-in to the app, and allows the…ead basic company information of signed-in users.", id: "e1fe6dd8-ba31-4d61-89e7-88639da4683d", name: "User.Read", type: "User" },
      { description: "Allows the app to send mail as users in the organization. ", id: "e383f46e-2787-4529-855e-0e479a3ffac0", name: "Mail.Send", type: "User" },
      { description: "This is deprecated!  Do not use! This permission n…additional privileges will be granted to the app.", id: "ed68249d-017c-4df5-9113-e684c7f8760b", name: "Notes.ReadWrite.CreatedByApp", type: "User" },
      { description: "Allows the app to read user tasks", id: "f45671fb-e0fe-4b4b-be20-3d3ce43f1bcb", name: "Tasks.Read", type: "User" },
      { description: "Allows the app to read properties of Microsoft Int…mpliance policies and their assignment to groups.", id: "f1493658-876a-4c87-8fa7-edb559b3476a", name: "DeviceManagementConfiguration.Read.All", type: "Admin" },
      { description: "Allows the app to read user contacts.  ", id: "ff74d97f-43af-4b68-9f2a-b77ee6968c5d", name: "Contacts.Read", type: "User" }];
  });

