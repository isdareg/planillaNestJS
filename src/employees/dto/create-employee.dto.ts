import { IsDate, IsDateString, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TypeEmployee,OrganicUnit, Condition, Salary, PensionAdministrator, Workday, Position, Establishment, OccupationalGroup, LaborRegime } from "../entities";


export class CreateEmployeeDto {
    @IsString()
    @MinLength(8)
    @MaxLength(8)
    employeeDni:        string;

    @IsString()
    employeeFullname:   string;

    // @IsNumber()
    // employeeStatus:     number;

    @IsDateString()
    employeeEntryDate:  Date;

    @IsString()
    employeeCUSPP:      string;
    
    @IsString()
    employeeAIRHSP:     string;
    
    @IsString()
    typeEmployee:       TypeEmployee;

    @IsString()    
    organicUnit:        OrganicUnit;

    @IsString()
    condition:          Condition

    @IsString()
    salary:             Salary

    @IsString()
    pensionAdministrator: PensionAdministrator

    @IsString()
    workday:Workday

    @IsString()
    position:Position

    @IsString()
    establishment:Establishment

    @IsString()
    occupationalGroup:OccupationalGroup

    @IsString()
    laborRegime:LaborRegime
}
