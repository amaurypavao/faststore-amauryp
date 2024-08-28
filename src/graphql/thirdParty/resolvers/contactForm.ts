type SubmitContactFormData = {
    input: {
      name: string;
      email: string;
      phone: string;
    };
  };
  
  const contactFormResolver = {
    Mutation: {
      submitContactForm: async (_: never, data: SubmitContactFormData) => {
        const { input } = data;
  
        try {
          const response = await fetch(
            "https://amauryp.vtexcommercestable.com.br/api/dataentities/trabalhe_conosco/documents?_schema=v0.1.1",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(input),
            }
          );
  
          if (!response.ok) {
            throw new Error("Error while sending the message");
          }
  
          return { message: "Your message was sent successfully!" };
        } catch (error) {
          return { message: error };
        }
      },
    },
  };
  
  export default contactFormResolver;