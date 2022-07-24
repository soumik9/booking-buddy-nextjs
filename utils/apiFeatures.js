class APIFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: 'i'
            }
        } : {}

        console.log('====================================');
        console.log(location);
        console.log('====================================');

        this.query = this.query.find({ ...location })
        return this
    }
}

export default APIFeatures