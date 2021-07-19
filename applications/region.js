

var regionList = [
	{parentCode:'',regionCode:'600000',regionName:'四川',regionLevel:'province'},
	{parentCode:'600000',regionCode:'601000',regionName:'成都',regionLevel:'city'},
	{parentCode:'601000',regionCode:'601001',regionName:'武侯',regionLevel:'district'},
	{parentCode:'601000',regionCode:'601002',regionName:'高新',regionLevel:'district'},
	{parentCode:'600000',regionCode:'601100',regionName:'资阳',regionLevel:'city'},
	{parentCode:'601100',regionCode:'601101',regionName:'雁江区',regionLevel:'district'},
	{parentCode:'', regionCode:'100000',regionName:'北京',regionLevel:'province'},
]



  function list2tree(list){
		function getChildren(node, depth) {
			const nextFloor = depth + 1
			const childNodes = list.filter(i => i.parentCode === node.regionCode)

			if(!childNodes.length) return null;

			return childNodes.map(i => {
				const transNodeBase = {
					key: i.regionCode,
					label: i.regionName,
					value: i.regionCode
				}

				const children = getChildren(i, nextFloor)
				
				if(children) {
					return {
						...transNodeBase,
						children
					}
				}

				return transNodeBase
			})
		}

		const root = { regionCode: "" }

		return getChildren(root, 0)
  };
  
  // var regionTree = list2tree(regionList);
  
  // console.log(regionTree);
  