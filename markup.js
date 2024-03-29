header = (content) => {
    return {
			  text: content,
			  style: 'header',
        fontSize: 16,
        margin: [0, 10, 0, 10],
    };
};

table_header = (content) => {
    return {
			  text: content,
			  style: 'header',
        alignment: 'center'
    };
};

propositions = (items) => {
    return {
        ol: items.map((prop) => `${prop.name} ${prop.totals}`),
        margin: 20
    };
};

features = (items) => {
    return {
        ul: items.map((item) => item)
    };
};

centered = (content) => {
    return {
			  text: content,
        alignment: 'center'
    };
};

exports.docPattern = (params) => {
    return {
        content: [
            { image: 'logo.png' },
            header(`${params.customer.name},`),
            params.email.welcome,
            propositions(params.propositions),
            {
		            style: 'tableExample',
			          table: {
				            headerRows: 1,
				            body: [
                        params.packages.map((package) => table_header(package.name)),
                        params.packages.map((package) => centered(`${package.value} ${package.rate}`)),
                        params.packages.map((package) => features(package.features))
				            ]
			          },
		        }]
    };
};
