const GenderCheckBox = () => {
	return (
		<div className="flex gap-3">
			<div className="form-control">
				<label className="label cursor-pointer space-x-2">
					<span className="label-text">Male</span>
					<input type="checkbox" className="checkbox border-slate-900" />
				</label>
			</div>
			<div className="form-control">
				<label className="label cursor-pointer space-x-2">
					<span className="label-text">Female</span>
					<input type="checkbox" className="checkbox border-slate-900" />
				</label>
			</div>
		</div>
	);
};

export default GenderCheckBox;
