import { fAccounts } from '@fixtures';
import { TAddress, WalletId } from '@types';

import { isSenderAccountPresent, isViewOnlyWallet } from './wallets';

describe('isViewOnlyWallet', () => {
  it('correctly identifies a viewOnly wallet', () => {
    expect(isViewOnlyWallet(WalletId.VIEW_ONLY)).toBeTruthy();
  });

  it('correctly identifies a non-viewOnly wallet', () => {
    expect(isViewOnlyWallet(WalletId.LEDGER_NANO_S)).toBeFalsy();
  });
});

describe('isSenderAccountPresent', () => {
  it('correctly identifies a valid sender account is present when address is of type ledger', () => {
    const ledgerSenderAccountAddress = '0xB2BB2b958aFA2e96dAb3F3Ce7162B87dAea39017' as TAddress;
    expect(isSenderAccountPresent(fAccounts, ledgerSenderAccountAddress)).toBeTruthy();
  });

  it('correctly identifies a valid sender account is not present when address is empty', () => {
    const emptySenderAddress = '' as TAddress;
    expect(isSenderAccountPresent(fAccounts, emptySenderAddress)).toBeFalsy();
  });

  it('correctly identifies a validsender account is not present when account is of type viewOnly', () => {
    const viewOnlySenderAddress = '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520' as TAddress;
    expect(isSenderAccountPresent(fAccounts, viewOnlySenderAddress)).toBeFalsy();
  });

  it('correctly identifies a valid sender account is  present when account is of type web3', () => {
    const web3SenderAddress = '0x9458a933f00da9a927dbbb9cc2ae3fe7dfa9aed5' as TAddress;
    expect(isSenderAccountPresent(fAccounts, web3SenderAddress)).toBeTruthy();
  });

  it('correctly identifies a valid sender account is present when account is of type walletconnect', () => {
    const walletConnectSenderAddress = '0x03a0775e92dc3ad2d2cb3eaf58af5ee99b183d49' as TAddress;
    expect(isSenderAccountPresent(fAccounts, walletConnectSenderAddress)).toBeTruthy();
  });
});
