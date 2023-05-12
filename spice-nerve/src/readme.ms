	const postDataToCart = (data) => {
		data.quantity = 1;
		axios
			.post("https://crabby-culottes-ant.cyclic.app/cart", data)
			.then(function (response) {})
			.catch(function (error) {});
	};
	const handleCartData = (data, size) => {
		setSize(size);
		if (size) {
			postDataToCart({ ...data, size: size });
			swal({
				title: "Product Is Added",
				icon: "success",
				button: "OK",
			});
			totalItem(+1);
		} else {
			swal("Please Add Size");
		}
	};
