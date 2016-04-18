var myLayout = new GoldenLayout({
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            title: 'FTSE 100 (1-50)',
            componentName: 'stockGrid',
            componentState: {
                symbols: [
                  "III", "ADN", "ADM", "AGK", "AAL", "ANTO",
                  "ARM", "AHT", "ABF", "AZN", "AV", "BAB",
                  "BA", "BARC", "BDEV", "BG", "BLT", "BP",
                  "BATS", "BLND", "BSY", "BT.A", "BNZL",
                  "BRBY", "CPI", "CCL", "CNA", "CCH",
                  "CPG", "CRH", "DGE", "EZJ", "EXPN",
                  "FRES", "FLG", "GFS", "GKN", "GSK",
                  "GLEN", "HMSO", "HL", "HSBA", "IMI", "IMT",
                  "IHG", "IAG", "ITRK", "INTU", "ITV", "JMAT"
                ]
            }
        }, {
            type: 'component',
            componentName: 'stockGrid',
            title: 'FTSE 100 (51-100)',
            componentState: {
                symbols: [
                  "KGF", "LAND", "LGEN", "LLOY", "LSE", "MKS",
                  "MGGT", "MNDI", "MRW", "NG", "NXT", "OML", "PSON",
                  "PSN", "PFC", "PRU", "RRS", "RB", "REL", "REX",
                  "RIO", "RR", "RBS", "RDSA", "RDSB", "RMG", "RSA",
                  "SAB", "SGE", "SBRY", "SDR", "SVT", "SHP", "SN",
                  "SMIN", "SPD", "SSE", "STJ", "STAN", "SL", "TSCO",
                  "TPK", "TT", "TLW", "ULVR", "UU", "VOD", "WEIR", "WTB", "WOS"
                ]
            }
        }]
    }]
});

var gridDiv = document.querySelector('#myGrid');

var gridOptions = {
    columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Role', field: 'role' }
    ],
    rowData: [
        { name: 'Niall', role: 'Developer' },
        { name: 'Eamon', role: 'Manager' },
        { name: 'Brian', role: 'Musician' },
        { name: 'Kevin', role: 'Manager' }
    ]
};

new agGrid.Grid(gridDiv, gridOptions);


myLayout.init();