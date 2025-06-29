import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact - Kanha Studio";
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      budgetRange: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="min-h-screen py-20 relative pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="sanskrit-quote text-sm mb-4">"सर्वे भवन्तु सुखिनः" - May All Beings Be Happy</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold gradient-text mb-6">Connect with Us</h2>
          <p className="text-lg midnight-blue/70 max-w-2xl mx-auto">
            Ready to embark on a divine creative journey? Let's create something beautiful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold midnight-blue mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="midnight-blue font-medium">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="bg-white/80 border-midnight-blue/20 focus:ring-peacock-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="midnight-blue font-medium">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white/80 border-midnight-blue/20 focus:ring-peacock-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="midnight-blue font-medium">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/80 border-midnight-blue/20 focus:ring-peacock-green">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="brand-identity">Brand Identity</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="mobile-design">Mobile Design</SelectItem>
                          <SelectItem value="print-design">Print Design</SelectItem>
                          <SelectItem value="digital-strategy">Digital Strategy</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="midnight-blue font-medium">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/80 border-midnight-blue/20 focus:ring-peacock-green">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="midnight-blue font-medium">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project vision..."
                          rows={4}
                          className="bg-white/80 border-midnight-blue/20 focus:ring-peacock-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-peacock-green text-white py-4 hover:bg-peacock-green/90 transition-colors font-medium"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Divine Message'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold midnight-blue mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-peacock-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Studio Location</h4>
                    <p className="midnight-blue/70">Vrindavan, Mathura<br />Uttar Pradesh, India 281121</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lotus-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Email</h4>
                    <p className="midnight-blue/70">hello@kanhastudio.com<br />projects@kanhastudio.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-medium midnight-blue mb-1">Phone</h4>
                    <p className="midnight-blue/70">+91 98765 43210<br />+91 87654 32109</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-peacock-green/20 to-lotus-pink/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl midnight-blue/40 mb-2">🗺️</div>
                  <p className="midnight-blue/60 font-medium">Interactive Map</p>
                  <p className="text-sm midnight-blue/40">Vrindavan, Mathura</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h4 className="font-medium midnight-blue mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-midnight-blue/10 rounded-full flex items-center justify-center hover:bg-midnight-blue hover:text-white transition-colors">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-midnight-blue/10 rounded-full flex items-center justify-center hover:bg-midnight-blue hover:text-white transition-colors">
                  🏀
                </a>
                <a href="#" className="w-12 h-12 bg-midnight-blue/10 rounded-full flex items-center justify-center hover:bg-midnight-blue hover:text-white transition-colors">
                  🎨
                </a>
                <a href="#" className="w-12 h-12 bg-midnight-blue/10 rounded-full flex items-center justify-center hover:bg-midnight-blue hover:text-white transition-colors">
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
