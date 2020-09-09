import Parse from 'parse';

Parse.initialize(process.env.REACT_APP_ID, process.env.REACT_APP_MASTER_KEY);
Parse.serverURL = `${process.env.REACT_APP_API_URL}/parse`;
Parse.enableEncryptedUser();
Parse.secret = 'Dex.Company';

export { Parse };
