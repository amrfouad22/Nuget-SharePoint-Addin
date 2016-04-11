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
    $clientWebPart="$installPath\templates\myapp\myAppPart.vstemplate"
    $project.ProjectItems.AddFromTemplate($clientWebPart,"MyAppPart")
    write-output "done..."
}
catch{
    $ErrorMessage = $_.Exception.Message
    $FailedItem = $_.Exception.ItemName
    write-host $ErrorMessage
}


