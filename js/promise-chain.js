async function sequence(){
    console.log('sequence launch')
    await opening_is_runnnig()
    await waitDOMLoaded()
    await Main_Element_Get()
    await genetareAllSlidesData()
    await Generated_Element_Get()
    await All_initialization()
    
    await opening_is_end()
}

sequence()