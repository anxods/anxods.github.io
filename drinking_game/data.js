function initialize(){
    
    var json_data = `
    {
        "data_dg" : [
            {
                "YN": "YN 1",
                "P": "P 1",
                "R": "R 1"
            },
            {
                "YN": "YN 2",
                "P": "P 2",
                "R": "R 2"
            },
            {
                "YN": "YN 3",
                "P": "P 3",
                "R": "R 3"
            }
        ]
    }`;

    return JSON.parse(json_data);

}