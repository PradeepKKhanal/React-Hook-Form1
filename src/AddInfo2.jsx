import { useForm ,Controller} from "react-hook-form";
import Select from 'react-select'


const initalValues={
    gender:'male',
    skills:{
        React:true,
        Angular:true,
        Vue:false
    }
}

const departments = [
    { value: "Computer-Science", label: "Computer Science" },
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Mathematics", label: "Mathematics" }
  ];
function AddInfo2() {
	const {
		register,
        control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({defaultValues:{
        name:'ram',
        email:'dfdfd',
        phone:'3243',
        gender:initalValues.gender,
        skills2:Object.keys(initalValues.skills).filter((skill)=>initalValues.skills[skill]===true)
        
    }});

	const onSubmit = (data) => {
		console.log(data);
		reset({
			name: "",
			email: "",
			phone: "",
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					{...register("name", {
						// required: true,
						// minLength:10
						required: "Name is required",
						minLength: {
							value: 10,
							message: "Name must be of atleast 10 characters",
						},
					})}
				/>
				{/* {errors.name?.type==="required" && <p>Name is required</p>}
                {errors.name?.type==="minLength" && <p>Name must be of atleast 10 characters</p>} */}
				{errors.name && <p>{errors.name.message}</p>}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					{...register("email", {
						// required: true,
						// pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
						required: "Email is required",
						pattern: {
							value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
							message: "Email is not valid pattern",
						},
					})}
				/>
				{/* {errors.email?.type==="required" && <p>Email is required</p>}
                {errors.email?.type==="pattern" && <p>Email is not valid </p>} */}

				{errors.email && <p>{errors.email.message}</p>}

				<label htmlFor="phone">Phone</label>
				<input
					type="number"
					id="phone"
					name="phone"
					{...register("phone", {
						// required: true,
						// minLength: 10,
						// maxLength:10
						required: "Phone is required",
						minLength: {
							value: 10,
							message: "Phone must be exact 10 digits",
						},
						maxLength: {
							value: 10,
							message: "Phone must be exact 10 digits",
						},
					})}
				/>
				{/* {errors.phone?.type==="required" && <p>Phone is required</p>}
                {
                    (errors.phone?.type==="minLength" || errors.phone?.type==="maxLength") && <p>Phone must be of exact 10 digits</p>
                } */}
				{errors.phone && <p>{errors.phone.message}</p>}

                <p>Choose your gender</p>
                <input type="radio" id="male" name="gender" value="male" {...register('gender',{
                    required:"Please select your gender"
                })}/>
                <label htmlFor="male" >Male</label>

                <input type="radio" name="gender" id="female" value="female" {...register('gender')}/>
                <label htmlFor="female">Female</label>

                <input type="radio" name="gender" id="other" value="other" {...register('gender')}/>
                <label htmlFor="other" >Other</label>

                {errors.gender && <p>{errors.gender.message}</p>}
                <br />

                <label htmlFor="skills">Choose skills</label>
                <select name="skills" id="skills" {...register('skills',{required:"You must make selection"})} >
                    <option value=""  >Choose a skill</option>
                    <option value="Html" >Html</option>
                    <option value="Css" >Css</option>
                    <option value="Js" >Js</option>
                    <option value="React" >React</option>
                </select>
                {
                    errors.skills2 && <p>{errors.skills2.message}</p>
                }

                <p>Choose skills</p>
                <input type="checkbox" value='React' id='React' {...register('skills2',{
                    required:'Please choose any one'
                })} />
                <label htmlFor="React">React</label>
                <input type="checkbox" value='Angular' id='Angular' {...register('skills2')} />
                <label htmlFor="Angular">Angular</label>
               
                <input type="checkbox" value='Vue' id='Vue' {...register('skills2')} />
                <label htmlFor="Vue">Vue</label>
               
                {errors.skills2 && <p>{errors.skills2.message}</p>}

                <p>##############################################################################################################################</p>

                <p>Select Department of Interest</p>

                <Controller
                    name="department"
                    control={control}
                    rules={{required:true}}
                    render={({field})=>{ return (
                        <Select {...field} isMulti options={departments}/>
                    )
                        
                    }}


                />
                {errors.department && <p>{'This is required'}</p>}
                {/* <Select isMulti options={[{value:'html',label:'html'},{value:'css',label:'css'},{value:'js',label:'js'}]}></Select> */}

				<button type="submit">Submit</button>


			</form>
		</>
	);
}

export default AddInfo2;
