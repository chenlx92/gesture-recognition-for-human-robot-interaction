'use strict';

/**
 * Author: Aravinth Panchadcharam
 * Email: me@aravinth.info
 * Date: 11/06/15.
 * Contributors:
 */

var handData = [
	{"RIGHT": ["434.715000", "536.169000", "1806.300000"], "LEFT": ["-432.611000", "526.910000", "1763.850000"]},
	{"RIGHT": ["434.217000", "523.945000", "1803.090000"], "LEFT": ["-427.872000", "512.559000", "1759.510000"]},
	{"RIGHT": ["432.525000", "511.221000", "1798.460000"], "LEFT": ["-432.576000", "500.618000", "1754.960000"]},
	{"RIGHT": ["432.233000", "499.582000", "1793.830000"], "LEFT": ["-436.883000", "492.598000", "1753.770000"]},
	{"RIGHT": ["429.916000", "486.395000", "1789.090000"], "LEFT": ["-436.544000", "481.496000", "1749.680000"]},
	{"RIGHT": ["427.409000", "469.667000", "1782.870000"], "LEFT": ["-440.517000", "469.872000", "1746.540000"]},
	{"RIGHT": ["422.606000", "457.118000", "1779.820000"], "LEFT": ["-441.333000", "461.954000", "1743.210000"]},
	{"RIGHT": ["424.770000", "446.159000", "1777.730000"], "LEFT": ["-447.099000", "454.890000", "1739.950000"]},
	{"RIGHT": ["423.719000", "433.544000", "1773.390000"], "LEFT": ["-450.636000", "444.225000", "1737.120000"]},
	{"RIGHT": ["423.540000", "415.523000", "1767.400000"], "LEFT": ["-463.229000", "429.875000", "1732.840000"]},
	{"RIGHT": ["425.733000", "401.481000", "1766.520000"], "LEFT": ["-462.568000", "423.813000", "1735.470000"]},
	{"RIGHT": ["427.477000", "392.401000", "1765.460000"], "LEFT": ["-465.920000", "414.129000", "1736.770000"]},
	{"RIGHT": ["429.878000", "381.142000", "1763.590000"], "LEFT": ["-467.264000", "404.849000", "1735.970000"]},
	{"RIGHT": ["428.061000", "367.390000", "1762.000000"], "LEFT": ["-470.887000", "393.235000", "1738.810000"]},
	{"RIGHT": ["428.351000", "353.766000", "1758.000000"], "LEFT": ["-473.593000", "379.097000", "1736.700000"]},
	{"RIGHT": ["427.425000", "341.049000", "1756.170000"], "LEFT": ["-477.151000", "364.646000", "1736.160000"]},
	{"RIGHT": ["428.589000", "327.824000", "1753.540000"], "LEFT": ["-475.652000", "353.733000", "1737.220000"]},
	{"RIGHT": ["433.856000", "313.829000", "1749.110000"], "LEFT": ["-471.019000", "339.405000", "1734.380000"]},
	{"RIGHT": ["427.258000", "298.505000", "1743.660000"], "LEFT": ["-472.706000", "322.000000", "1731.950000"]},
	{"RIGHT": ["427.626000", "282.887000", "1736.630000"], "LEFT": ["-471.877000", "296.703000", "1725.440000"]},
	{"RIGHT": ["425.106000", "265.112000", "1732.380000"], "LEFT": ["-476.885000", "290.501000", "1724.350000"]},
	{"RIGHT": ["428.356000", "253.823000", "1725.450000"], "LEFT": ["-477.143000", "283.148000", "1722.020000"]},
	{"RIGHT": ["431.016000", "246.664000", "1720.410000"], "LEFT": ["-478.924000", "273.618000", "1721.860000"]},
	{"RIGHT": ["432.564000", "236.236000", "1716.790000"], "LEFT": ["-479.740000", "247.279000", "1713.350000"]},
	{"RIGHT": ["432.675000", "223.885000", "1712.700000"], "LEFT": ["-482.337000", "229.819000", "1707.110000"]},
	{"RIGHT": ["434.372000", "212.809000", "1707.100000"], "LEFT": ["-483.862000", "214.772000", "1703.840000"]},
	{"RIGHT": ["434.138000", "203.348000", "1704.480000"], "LEFT": ["-486.736000", "208.048000", "1702.040000"]},
	{"RIGHT": ["432.154000", "192.180000", "1700.220000"], "LEFT": ["-484.885000", "203.895000", "1696.740000"]},
	{"RIGHT": ["432.483000", "186.927000", "1699.340000"], "LEFT": ["-484.533000", "198.870000", "1695.520000"]},
	{"RIGHT": ["431.050000", "179.093000", "1696.600000"], "LEFT": ["-484.748000", "195.592000", "1695.220000"]},
	{"RIGHT": ["431.298000", "176.094000", "1692.500000"], "LEFT": ["-483.861000", "191.387000", "1693.270000"]},
	{"RIGHT": ["430.909000", "177.923000", "1694.600000"], "LEFT": ["-481.980000", "192.117000", "1692.940000"]},
	{"RIGHT": ["427.528000", "184.393000", "1696.180000"], "LEFT": ["-482.808000", "191.264000", "1693.540000"]},
	{"RIGHT": ["429.055000", "192.399000", "1698.910000"], "LEFT": ["-482.681000", "193.152000", "1690.600000"]},
	{"RIGHT": ["426.059000", "205.450000", "1702.540000"], "LEFT": ["-480.497000", "201.440000", "1694.660000"]},
	{"RIGHT": ["425.898000", "219.897000", "1707.220000"], "LEFT": ["-479.123000", "217.380000", "1697.300000"]},
	{"RIGHT": ["428.866000", "239.982000", "1711.910000"], "LEFT": ["-482.037000", "234.700000", "1701.940000"]},
	{"RIGHT": ["424.151000", "258.502000", "1719.650000"], "LEFT": ["-482.896000", "259.519000", "1706.480000"]},
	{"RIGHT": ["429.840000", "274.394000", "1726.510000"], "LEFT": ["-483.849000", "277.340000", "1712.510000"]},
	{"RIGHT": ["424.495000", "289.308000", "1729.380000"], "LEFT": ["-485.142000", "299.319000", "1719.360000"]},
	{"RIGHT": ["426.654000", "308.643000", "1738.010000"], "LEFT": ["-490.067000", "316.149000", "1723.370000"]},
	{"RIGHT": ["423.264000", "329.682000", "1746.640000"], "LEFT": ["-488.325000", "329.320000", "1728.410000"]},
	{"RIGHT": ["419.478000", "348.480000", "1752.270000"], "LEFT": ["-487.059000", "347.106000", "1734.590000"]},
	{"RIGHT": ["420.908000", "362.747000", "1759.270000"], "LEFT": ["-483.783000", "365.653000", "1739.320000"]},
	{"RIGHT": ["421.306000", "379.135000", "1768.010000"], "LEFT": ["-489.567000", "385.701000", "1741.030000"]},
	{"RIGHT": ["421.708000", "392.423000", "1772.620000"], "LEFT": ["-483.662000", "391.426000", "1743.550000"]},
	{"RIGHT": ["421.319000", "408.240000", "1779.360000"], "LEFT": ["-486.413000", "403.205000", "1748.850000"]},
	{"RIGHT": ["424.880000", "418.455000", "1781.090000"], "LEFT": ["-485.445000", "419.125000", "1752.300000"]},
	{"RIGHT": ["424.530000", "436.959000", "1789.420000"], "LEFT": ["-481.923000", "429.588000", "1753.650000"]}
];