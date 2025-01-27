const enums = {
    SUCCESS_ON_SERVER_CONNECTION: 'success - 200 - ok - server connected',
    FAILED_ON_SERVER_CONNECTION: 'failed - 502 - server error - server connection failed',
    SUCCESS_ON_READIND_DATA: 'success - 200 - read data',
    FAILED_ON_READING_DATA: 'failed - 500 - fetching data - read data',
    SUCCESS_ON_POST_DATA: 'success - 201 - created - add data',
    FAILED_ON_POST_DATA: 'failed - 502 - server error - add data',
    SUCCESS_ON_PUT_DATA: 'success - 200 - updated - update data',
    FAILED_ON_PUT_DATA: 'failed - 501 - server error - update data',
    SUCCESS_ON_DELETE_DATA: 'success - 200 - deleted - delete data',
    FAILED_ON_DELETE_DATA: 'failed - 502 - server error - delete data',
    SUCCESS_ON_PATCH_DATA: 'success - 200 - updated item - update item on data',
    FAILED_ON_PATCH_DATA: 'failed - 502 - server error - update item on data',
    SUCCESS_ON_DB_CONNECTION: 'db connect successfully!',
    FAILED_ON_DB_CONNECTION: 'db connection failed!',
    NOT_FOUND: '404 - Not Found'
}

export default enums;