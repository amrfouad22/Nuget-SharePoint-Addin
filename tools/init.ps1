param($installPath, $toolsPath, $package,$project)
Import-Module (Join-Path $toolsPath addFiles.psm1)
#getting solution object
$solution2 = Get-Interface $dte.Solution ([EnvDTE80.Solution2])
#getting module element item template to be added
#$itemTemplate=$solution2.GetProjectItemTemplate("SharePoint14Module", "CSharp")
try{
    $itemTemplate="C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE\ItemTemplatesCache\CSharp\Office SharePoint\1033\SharePoint14Module\\SharePointModule.vstemplate"
    write-output "Initializing nuget package.."
    write-output "creating module elements in the sharepoint solution.."
    #add two module elements
    $project.ProjectItems.AddFromTemplate($itemTemplate,"app")
    $app= $project.ProjectItems.Item("app")
    Add-Files "$installPath\app" $app
    $project.ProjectItems.AddFromTemplate($itemTemplate,"assets")
    $assets=$project.ProjectItems.Item("assets")
    Add-Files "$installPath\assets" $assets  
    write-output "done..."
}
catch{
    $ErrorMessage = $_.Exception.Message
    $FailedItem = $_.Exception.ItemName
    write-host $ErrorMessage 
}


