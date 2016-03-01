<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
<!DOCTYPE html>
<html ng-app="CommentApp">
	<head>

		<!-- Basic -->
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">	

		<title>Page Comments</title>	

		<meta name="keywords" content="Sample SharePoint Angular App" />
		<meta name="description" content="SharePoint Add-in Angualr App">
		<meta name="author" content="Amr Fouad">

		<!-- Favicon -->
		<link rel="shortcut icon" href="../assets/img/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" href="../assets/img/apple-touch-icon.png">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Web Fonts  -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="../assets/vendor/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="../assets/vendor/fontawesome/css/font-awesome.css">

		<!-- Theme CSS -->
		<link rel="stylesheet" href="../assets/css/theme.css">
		<link rel="stylesheet" href="../assets/css/theme-elements.css">
		<link rel="stylesheet" href="../assets/css/theme-blog.css">
		<link rel="stylesheet" href="../assets/css/theme-shop.css">
		<link rel="stylesheet" href="../assets/css/theme-animate.css">

		<!-- Skin CSS -->
		<link rel="stylesheet" href="../assets/css/skins/default.css">

		<!-- Theme Custom CSS -->
		<link rel="stylesheet" href="../assets/css/custom.css">
        <!--Angular js cdn-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular-route.js"></script>

		<script src="../app/app.js"></script>
		<script src="../app/controllers/mainController.js"></script>
		<script src="../app/directives/comments.js"></script>
		<script src="../app/services/commentSvc.js"></script>
		<!-- Head Libs -->
		<script src="../assets/vendor/modernizr/modernizr.js"></script>
		<!--[if IE]>
			<link rel="stylesheet" href="css/ie.css">
		<![endif]-->
		<!--[if lte IE 8]>
			<script src="vendor/respond/respond.js"></script>
			<script src="vendor/excanvas/excanvas.js"></script>
		<![endif]-->
        <!-- Vendor -->
		<!--[if lt IE 9]>
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
		<![endif]-->
		<!--[if gte IE 9]><!-->
		<script src="../assets/vendor/jquery/jquery.js"></script>
		<!--<![endif]-->
        <base href="/SharePointApp2/Pages/commentapp.aspx" />
	</head>
	<body>
		<div class="body">
			<div role="main" class="main">
				<div class="container">
					<div class="row">
						<div class="col-md-12" ng-view>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="../assets/vendor/bootstrap/bootstrap.js"></script>
		<script src="../assets/vendor/common/common.js"></script>
		<!-- Theme Base, Components and Settings -->
		<script src="../assets/js/theme.js"></script>
		<!-- Theme Custom -->
		<script src="../assets/js/custom.js"></script>
		<!-- Theme Initialization Files -->
		<script src="../assets/js/theme.init.js"></script>
	</body>
</html>

