import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.biznet{
   export enum contractState {
      CREATED,
      WAITING_SIGNATURES,
      COMPLETE,
   }
   export class Address {
      street: string;
      house: string;
      city: string;
      county: string;
      country: string;
      zip: string;
   }
   export class Member extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      dob: Date;
      address: Address;
   }
   export class contract extends Asset {
      assetId: string;
      documentHash: string;
      creator: Member;
      signator: Member;
      creatorSigned: boolean;
      signatorSigned: boolean;
      state: contractState;
   }
   export abstract class ledgerTransaction extends Transaction {
      Contract: contract;
   }
   export class signContract extends ledgerTransaction {
   }
   export class prepareForSignature extends ledgerTransaction {
   }
   export class completeSignoff extends ledgerTransaction {
   }
   export class createContract extends Transaction {
      docId: string;
      docHash: string;
      signator: Member;
   }
   export class contractSignedNotification extends Event {
      Contract: contract;
      Signer: Member;
   }
   export class contractCreatedNotification extends Event {
      Contract: contract;
   }
   export class contractCompletedNotification extends Event {
      Contract: contract;
   }
// }
