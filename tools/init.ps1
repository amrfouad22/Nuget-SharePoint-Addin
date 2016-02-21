param($installPath, $toolsPath, $package,$project)
Import-Module (Join-Path $toolsPath addFiles.psm1)
#getting solution object
$solution2 = Get-Interface $dte.Solution ([EnvDTE80.Solution2])
try{
    #getting module element item template to be added
    $itemTemplate=$solution2.GetProjectItemTemplate("SharePoint16_1Module_CS_ITEM", "CSharp")
    write-output "Initializing nuget package.."
    write-output "creating module elements in the sharepoint solution.."
    #add two module elements
    $project.ProjectItems.AddFromTemplate($itemTemplate,"app")
    $app= $project.ProjectItems.Item("app")
    Add-Files "$installPath\app" $app
    $project.ProjectItems.AddFromTemplate($itemTemplate,"assets")
    $assets=$project.ProjectItems.Item("assets")
    Add-Files "$installPath\assets" $assets  
    #add custom comment list item template to the solution
    $listItem="$installPath\templates\CommentList\CommentList.vstemplate"
    $project.ProjectItems.AddFromTemplate($listItem,"CommentsList")
    $clientWebPart="$installPath\templates\commentapp\CommentAppPart.vstemplate"
    $project.ProjectItems.AddFromTemplate($clientWebPart,"CommentAppPart")
    write-output "done..."
}
catch{
    $ErrorMessage = $_.Exception.Message
    $FailedItem = $_.Exception.ItemName
    write-host $ErrorMessage
}


