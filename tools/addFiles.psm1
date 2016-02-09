#add files recursively to the SP module element passed as a second parameter.. 
function Add-Files($path,$projectItem){
    write-output "adding $path to $projectItem.Name"
    foreach ($item in Get-ChildItem $path)
    {
        if (Test-Path $item.FullName -PathType Container) 
        {
            #create directory
            $projectItem.ProjectItems.AddFolder($item.Name)
            $childItem=$projectItem.ProjectItems.Item($item.Name)
            #call add files recursively
            Add-Files $item.FullName $childItem
        } 
        else 
        { 
            $projectItem.ProjectItems.AddFromFileCopy($item.FullName)
        }
    } 
}
Export-ModuleMember Add-Files