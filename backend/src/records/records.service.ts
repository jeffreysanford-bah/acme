import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {
    private mockDatabase: Record[] = [

      {
        "UID": "123456789",
        "firstName": "John",
        "lastName": "Doe",
        "address": "123 Elm St",
        "city": "Springfield",
        "state": "IL",
        "zip": "62704",
        "areaCode": "303",
        "phone": "555-1234",
        "salary": [
          { "companyName": "ABC Corp", "annualSalary": 30000 },
          { "companyName": "XYZ Inc", "annualSalary": 20000 }
        ],
        "totalHouseholdIncome": 60000
      },
      {
        "UID": "987654321",
        "firstName": "Jane",
        "lastName": "Smith",
        "address": "456 Oak St",
        "city": "Shelbyville",
        "state": "IN",
        "zip": "46176",
        "areaCode": "303",
        "phone": "555-5678",
        "salary": [
          { "companyName": "123 Solutions", "annualSalary": 35000 },
          { "companyName": "456 Enterprises", "annualSalary": 17000 }
        ],
        "totalHouseholdIncome": 62000
      },
      {
        "UID": "234567891",
        "firstName": "Alice",
        "lastName": "Johnson",
        "address": "789 Pine St",
        "city": "Rivertown",
        "state": "TX",
        "zip": "73301",
        "areaCode": "303",
        "phone": "555-2345",
        "salary": [
          { "companyName": "789 Industries", "annualSalary": 40000 },
          { "companyName": "101 Tech", "annualSalary": 25000 }
        ],
        "totalHouseholdIncome": 70000
      },
      {
        "UID": "345678912",
        "firstName": "Bob",
        "lastName": "Brown",
        "address": "321 Maple St",
        "city": "Laketown",
        "state": "WI",
        "zip": "53202",
        "areaCode": "303",
        "phone": "555-3456",
        "salary": [
          { "companyName": "201 Innovations", "annualSalary": 45000 },
          { "companyName": "303 Solutions", "annualSalary": 15000 }
        ],
        "totalHouseholdIncome": 65000
      }
    ];    

  
    getRecordByUID(UID: string): Record {
      // Mock database fetch
      return this.mockDatabase.find(record => record.UID === UID);
    }
  
    getAllRecords(): Record[] {
      // Mock database fetch
      return this.mockDatabase;
    }
  
    calculateTotalIncome(UID: string): number {
      const record = this.getRecordByUID(UID);
      if (record) {
        return record.salary.reduce((acc, companySalary) => acc + companySalary.annualSalary, 0);
      }
      return 0;
    }
  }
  