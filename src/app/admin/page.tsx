"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getContent, updateContent } from "./actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Save, Plus, Trash2, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    async function load() {
      const data = await getContent();
      setContent(data);
      setLoading(false);
    }
    load();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    const res = await updateContent(content);
    if (res.success) {
      alert("Website content updated successfully!");
    } else {
      alert("Error: " + res.error);
    }
    setLoading(false);
  };

  if (loading && !content) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-off-white'>
        <div className='animate-pulse text-swiss-red font-display text-2xl'>
          Loading Dashboard...
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "events", label: "Events" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className='min-h-screen bg-[#FDFDFD] p-6 md:p-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-ink-black/5'>
          <div>
            <h1 className='text-5xl font-display font-bold text-ink-black tracking-tight'>
              Content{" "}
              <span className='text-swiss-red font-serif italic'>
                Dashboard
              </span>
            </h1>
            <p className='text-ink-black/40 font-mono text-[10px] uppercase tracking-[0.3em] mt-3 flex items-center gap-2'>
              <span className='w-4 h-[1px] bg-swiss-red/30'></span>
              Professional Portal / CMS 1.0
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <Button
              variant='outline'
              asChild
              className='rounded-none border-ink-black/10 hover:bg-ink-black hover:text-white transition-all'
            >
              <Link href='/' target='_blank'>
                <Home size={16} className='mr-2' /> View Site
              </Link>
            </Button>
            <Button
              onClick={handleSave}
              disabled={loading}
              className='bg-swiss-red text-white hover:bg-swiss-red/90 group rounded-none h-11 px-8'
            >
              <Save
                size={18}
                className={cn(
                  "mr-2 transition-transform",
                  loading ? "animate-pulse" : "group-hover:translate-y-[-1px]",
                )}
              />
              {loading ? "Syncing..." : "Publish Changes"}
            </Button>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Sidebar Tabs */}
          <aside className='lg:w-72 space-y-1'>
            <div className='mb-6 px-4'>
              <span className='text-[10px] font-mono text-ink-black/30 uppercase tracking-[0.2em]'>
                Sections
              </span>
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full text-left px-4 py-3 font-display font-bold text-xs uppercase tracking-[0.15em] transition-all relative group",
                  activeTab === tab.id ?
                    "text-swiss-red"
                  : "text-ink-black/40 hover:text-ink-black hover:pl-6",
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId='activeTab'
                    className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-swiss-red'
                  />
                )}
                {tab.label}
              </button>
            ))}
          </aside>

          {/* Form Content */}
          <main className='flex-1'>
            {activeTab === "hero" && (
              <div className='space-y-6'>
                <h2 className='text-2xl font-display font-bold mb-8 uppercase'>
                  Hero Section
                </h2>
                <div className='grid gap-6'>
                  <div className='space-y-2'>
                    <Label>Title</Label>
                    <Input
                      value={content.hero.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Subtitle</Label>
                    <Input
                      value={content.hero.subtitle}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, subtitle: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Description</Label>
                    <Textarea
                      value={content.hero.description}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            description: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "about" && (
              <div className='space-y-6'>
                <h2 className='text-2xl font-display font-bold mb-8 uppercase'>
                  About Section
                </h2>
                <div className='grid gap-6'>
                  <div className='space-y-2'>
                    <Label>Section Title</Label>
                    <Input
                      value={content.about.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Biography</Label>
                    <Textarea
                      rows={6}
                      value={content.about.description}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: {
                            ...content.about,
                            description: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className='pt-6 border-t'>
                    <Label className='mb-4 block'>Key Statistics</Label>
                    <div className='grid grid-cols-2 gap-4'>
                      {content.about.stats.map((stat: any, i: number) => (
                        <div
                          key={i}
                          className='p-4 border border-ink-black/5 bg-off-white space-y-2'
                        >
                          <Input
                            placeholder='Value (e.g. 50+)'
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...content.about.stats];
                              newStats[i].value = e.target.value;
                              setContent({
                                ...content,
                                about: { ...content.about, stats: newStats },
                              });
                            }}
                          />
                          <Input
                            placeholder='Label'
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...content.about.stats];
                              newStats[i].label = e.target.value;
                              setContent({
                                ...content,
                                about: { ...content.about, stats: newStats },
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "journey" && (
              <div className='space-y-8'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-2xl font-display font-bold uppercase'>
                    Professional Journey
                  </h2>
                  <Button
                    size='sm'
                    className='bg-ink-black text-white hover:bg-ink-black/90'
                    onClick={() => {
                      const newItem = {
                        id: Date.now().toString(),
                        year: "2024",
                        title: "New Role",
                        organization: "Organization",
                        location: "Location",
                        description: "Description...",
                        type: "work",
                      };
                      setContent({
                        ...content,
                        journey: [...content.journey, newItem],
                      });
                    }}
                  >
                    <Plus size={16} className='mr-2' /> Add Milestone
                  </Button>
                </div>
                <div className='space-y-4'>
                  {content.journey.map((item: any, i: number) => (
                    <div
                      key={item.id}
                      className='p-6 border border-ink-black/10 bg-off-white hover:border-swiss-red transition-colors group relative'
                    >
                      <button
                        className='absolute top-4 right-4 text-ink-black/20 hover:text-swiss-red transition-colors'
                        onClick={() => {
                          const newList = content.journey.filter(
                            (_: any, idx: number) => idx !== i,
                          );
                          setContent({ ...content, journey: newList });
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                          <Label>Year</Label>
                          <Input
                            value={item.year}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].year = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          />
                        </div>
                        <div className='space-y-2'>
                          <Label>Category</Label>
                          <select
                            className='flex h-10 w-full border border-ink-black/10 bg-white px-3 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-swiss-red'
                            value={item.type}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].type = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          >
                            <option value='work'>Work Experience</option>
                            <option value='education'>Education</option>
                            <option value='achievement'>Achievement</option>
                          </select>
                        </div>
                        <div className='col-span-2 space-y-2'>
                          <Label>Title / Role</Label>
                          <Input
                            value={item.title}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].title = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          />
                        </div>
                        <div className='space-y-2'>
                          <Label>Organization</Label>
                          <Input
                            value={item.organization}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].organization = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          />
                        </div>
                        <div className='space-y-2'>
                          <Label>Location</Label>
                          <Input
                            value={item.location}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].location = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          />
                        </div>
                        <div className='col-span-2 space-y-2'>
                          <Label>Description</Label>
                          <Textarea
                            value={item.description}
                            onChange={(e) => {
                              const newList = [...content.journey];
                              newList[i].description = e.target.value;
                              setContent({ ...content, journey: newList });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className='space-y-8'>
                <h2 className='text-2xl font-display font-bold uppercase'>
                  Expertise & Skills
                </h2>
                <div className='grid grid-cols-1 gap-8'>
                  {content.skills.map((category: any, i: number) => (
                    <div
                      key={i}
                      className='p-6 border border-ink-black/10 bg-off-white'
                    >
                      <div className='mb-4 space-y-2'>
                        <Label>Category Name</Label>
                        <Input
                          value={category.title}
                          onChange={(e) => {
                            const newSkills = [...content.skills];
                            newSkills[i].title = e.target.value;
                            setContent({ ...content, skills: newSkills });
                          }}
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label>Skills List (Comma separated)</Label>
                        <Textarea
                          value={category.skills.join(", ")}
                          onChange={(e) => {
                            const newSkills = [...content.skills];
                            newSkills[i].skills = e.target.value
                              .split(",")
                              .map((s) => s.trim())
                              .filter((s) => s !== "");
                            setContent({ ...content, skills: newSkills });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className='space-y-8'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-2xl font-display font-bold uppercase'>
                    Case Studies
                  </h2>
                  <Button
                    size='sm'
                    className='bg-ink-black text-white'
                    onClick={() => {
                      const newItem = {
                        id: Date.now().toString(),
                        title: "New Event",
                        client: "Client Name",
                        date: "Date",
                        guests: "Guest Count",
                        description: "Brief about the execution...",
                        tags: ["New"],
                      };
                      setContent({
                        ...content,
                        events: [...content.events, newItem],
                      });
                    }}
                  >
                    <Plus size={16} className='mr-2' /> Add Event
                  </Button>
                </div>
                <div className='grid gap-6'>
                  {content.events.map((item: any, i: number) => (
                    <div
                      key={item.id}
                      className='p-6 border border-ink-black/10 bg-off-white relative group'
                    >
                      <button
                        className='absolute top-4 right-4 text-ink-black/20 hover:text-swiss-red'
                        onClick={() => {
                          const newList = content.events.filter(
                            (_: any, idx: number) => idx !== i,
                          );
                          setContent({ ...content, events: newList });
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className='grid gap-4'>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='space-y-2'>
                            <Label>Event Title</Label>
                            <Input
                              value={item.title}
                              onChange={(e) => {
                                const newList = [...content.events];
                                newList[i].title = e.target.value;
                                setContent({ ...content, events: newList });
                              }}
                            />
                          </div>
                          <div className='space-y-2'>
                            <Label>Client</Label>
                            <Input
                              value={item.client}
                              onChange={(e) => {
                                const newList = [...content.events];
                                newList[i].client = e.target.value;
                                setContent({ ...content, events: newList });
                              }}
                            />
                          </div>
                        </div>
                        <Textarea
                          value={item.description}
                          onChange={(e) => {
                            const newList = [...content.events];
                            newList[i].description = e.target.value;
                            setContent({ ...content, events: newList });
                          }}
                        />
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='space-y-2'>
                            <Label>Date</Label>
                            <Input
                              value={item.date}
                              onChange={(e) => {
                                const newList = [...content.events];
                                newList[i].date = e.target.value;
                                setContent({ ...content, events: newList });
                              }}
                            />
                          </div>
                          <div className='space-y-2'>
                            <Label>Guests</Label>
                            <Input
                              value={item.guests}
                              onChange={(e) => {
                                const newList = [...content.events];
                                newList[i].guests = e.target.value;
                                setContent({ ...content, events: newList });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "interests" && (
              <div className='space-y-8'>
                <h2 className='text-2xl font-display font-bold uppercase'>
                  Personal Interests
                </h2>
                <div className='grid gap-6'>
                  {content.interests.map((item: any, i: number) => (
                    <div
                      key={i}
                      className='p-6 border border-ink-black/10 bg-off-white'
                    >
                      <div className='grid gap-4'>
                        <Input
                          value={item.title}
                          onChange={(e) => {
                            const newList = [...content.interests];
                            newList[i].title = e.target.value;
                            setContent({ ...content, interests: newList });
                          }}
                        />
                        <Textarea
                          value={item.description}
                          onChange={(e) => {
                            const newList = [...content.interests];
                            newList[i].description = e.target.value;
                            setContent({ ...content, interests: newList });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className='space-y-6'>
                <h2 className='text-2xl font-display font-bold mb-8 uppercase'>
                  Contact Info
                </h2>
                <div className='grid gap-6'>
                  <div className='space-y-2'>
                    <Label>Professional Email</Label>
                    <Input
                      value={content.contact.email}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            email: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Phone</Label>
                    <Input
                      value={content.contact.phone}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            phone: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Location</Label>
                    <Input
                      value={content.contact.location}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            location: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>LinkedIn URL</Label>
                    <Input
                      value={content.contact.linkedin}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            linkedin: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Instagram URL</Label>
                    <Input
                      value={content.contact.instagram}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            instagram: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
