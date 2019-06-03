/*public class LoanDetail
    {
        private string _clientName;
        private string _projectName;
        private string _loanDate;
        private string _returnDate;
        private string _loanSupervisor;
        private string _returnSupervisor;
        private string _type;
        private string _brand;
        private string _modelNumber;
        private string _serialNumber;
        private string _assetNumber;
        private string _loanCondition;
        private string _returnCondition;
        private string _note;
        private long _employeeID;
        private long _loanID;
        private long _projectID;
        */
export class LoanDetail {
    ClientName: string;
    ProjectName: string;
    LoanDate: string;
    ReturnDate: string;
    LoanSupervisor: string;
    ReturnSupervisor: string;
    Type: string;
    Brand: string;
    ModelNumber: string;
    SerialNumber: string;
    AssetNumber: string;
    LoanCondition: string;
    ReturnCondition: string;
    Note: string;
    EmployeeID: bigint;
    LoanID: bigint;
    ProjectID: bigint;
}