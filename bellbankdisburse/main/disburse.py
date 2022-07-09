import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pathlib import Path

def update_payment(case_id):

    p = Path(__file__).absolute()
    p = str(p)
    j = p.replace("py", "json")

    scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name(j, scope)
    client = gspread.authorize(creds)

    spreadsheet = client.open("UnicefData").sheet1

    case_col = spreadsheet.col_values(1)

    for val in case_col:
        if val != "Case ID":
            if val == case_id:
                try:
                    spreadsheet.update_cell(case_col.index(val) + 1, 14, "PAID")
                    return True
                except:
                    return False

    
            


