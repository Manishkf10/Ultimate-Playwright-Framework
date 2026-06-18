import ExcelJS from 'exceljs';

let filePath="D:/manish work space/playwrightWorkspace/practiceData.xlsx";
const workbook=new ExcelJS.Workbook();

const readExcel=async(filePath,sheetName,row,col)=>{
    
    await workbook.xlsx.readFile(filePath);
    const sheet=workbook.getWorksheet(sheetName);
    const cellData=sheet.getCell(row,col);
    return cellData.value;
}

const writeFile = async (filePath, sheetName, row, col, value){
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(sheetName);
    sheet.getCell(row, col).value = value;
    await workbook.xlsx.writeFile(filePath);
}

const data= await readExcel(filePath,"Sheet1",2,2);
console.log(data);