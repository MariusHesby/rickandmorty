import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    firstName: yup.string().min(3, "First name must be at least 3 characters"),
    lastName: yup.string().min(4, "Last name must be at least 3 characters").required("Please enter your first name").required("Please enter your last name"),
    email: yup.string().email("E-mail must be valid").required("Please enter your e-mail"),
    subject: yup.string().required("Please choose a subject"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Please enter a message"),


    // age: yup.number().required("Please enter your age").min(10, "Age must be between 10 and 20"),
    // website: yup.string().required("Please enter your e-mail").min(10, "The e-mail must be a valid URL"),
});

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label htmlFor="firstName" className="block mb-1">First name</label>
                <input type="text" {...register("firstName", { required: true })} className="border border-black p-1 rounded max-w-full" id="firstName" />
                {errors.firstName && <span className="block text-red-600">{errors.firstName.message}</span>}
            </div>


            <div className="mb-3">
                <label htmlFor="lastName" className="block">Last name</label>
                <input type="text" {...register("lastName", { required: true })} className="border border-black p-1 rounded max-w-full" id="lastName" />
                {errors.lastName && <span className="block text-red-600">{errors.lastName.message}</span>}
            </div>

            {/* FIX */}
            <div className="mb-3">
                <label htmlFor="email" className="block">E-mail</label>
                <input type="text" {...register("email", { required: true })} className="border border-black p-1 rounded max-w-full" id="email" />
                {errors.email && <span className="block text-red-600">{errors.email.message}</span>}
            </div>

            {/* FIX */}
            <div className="mb-3">
                <label htmlFor="subject" className="block">Subject</label>
                <select name="Subject" {...register("subject", { required: true })} className="border border-black p-1 rounded max-w-full" id="subject">
                    <option value={""}>What is the darn subject?</option>
                    <option value="Mr">I have happy things to say</option>
                    <option value="Mrs">I have supersad things to say</option>
                </select>


                {/* <label htmlFor="subject" className="block">Subject</label>
                <input type="text" {...register("subject", { required: true })} className="border border-black p-1 rounded" id="subject" /> */}
                {errors.subject && <span className="block text-red-600">{errors.subject.message}</span>}
            </div>



            {/* <label>Title</label>
            <select name="Title" {...register("title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select> */}




            {/* FIX */}
            <div className="mb-10">
                <label htmlFor="message" className="block">Message</label>
                <textarea rows="4" cols="50" {...register("message", { required: true })} className="border border-black p-1 rounded max-w-full" id="message" />
                {errors.message && <span className="block text-red-600">{errors.message.message}</span>}
            </div>


            <button type="submit" className="px-3 py-2 border border-black bg-blue-600 text-white rounded">Submit</button>
        </form>
    );
}

export default ContactForm;