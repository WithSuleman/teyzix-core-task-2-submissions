import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
  id="contact"

>  <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8"
      >
        <div className="space-y-5">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            rows="5"
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;