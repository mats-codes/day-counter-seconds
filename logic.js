const spanId = 'span-time'

function getMsSinceMidnight() {
    const d = new Date(), e = new Date(d);
    const msSinceMidnight = e - d.setHours(0,0,0,0);
    return msSinceMidnight;
}


const delay = (time) =>{
    return new Promise(resolve => setTimeout(resolve, time));
}


const run = async() => {
    try{
        const newText = Math.ceil(getMsSinceMidnight()/1000);
        const element = document.getElementById(spanId)
        element.textContent = newText;
    }catch(e){}
    await delay(500)
    run();
}

run()