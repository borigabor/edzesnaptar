
const now = new Date();
let edzesnap = 3;
const edzes = ["váll", "kar", "mell", "láb"];
const edzes_period = 30;
let edzesHTMLtamplate = "";
let db = 4;

function hetvegeVizsgal (day) {

    const next30Days = now.getTime() + day * 24 * 60 * 60 * 1000;
    let nap = new Date(next30Days).getDay();

    return nap % 6 === 0;

}

function generateNext30Days(day) {

    const next30Days = now.getTime() + day * 24 * 60 * 60 * 1000;
    let nap = new Date(next30Days).getDate();
    let honap = new Date(next30Days).getMonth() + 1;

    if (honap < 10) {
     honap = `0${honap}`;
    }
 
    if (nap < 10) {
     nap = `0${nap}`;
    }



    return `${honap}.${nap}.`;
}


function edzesTerv () {

    let str = "";

    if (edzesnap === edzes.length) {
        edzesnap = 0;
    }


     if (edzesnap < edzes.length && db !== 4) {
        str = edzes[edzesnap];
        edzesnap++;
        db++;
    }  
    else if (db >= 4) {
        db = 1;
        str = "---";
    }


    return str;
}




for (let i = 1; i <= edzes_period; i++) {

    let hetvege = hetvegeVizsgal(i);
    let date = generateNext30Days(i);
    let str = edzesTerv();

    edzesHTMLtamplate += `
        <tr>
           <td class="${hetvege ? "hetvege" : ""}">${date}</td>
            <td class="${hetvege ? "hetvege" : ""}">${str}</td>
        </tr>
            
    `;
}

document.getElementById("edzes-container").innerHTML = `
    <table>
        <tr>
            <td>dátum</td>
            <td>edzés</td>
        </tr>
        ${edzesHTMLtamplate}
    </table>
`;