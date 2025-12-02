"use client";

import { useEffect, useState, FC } from "react";
import { apiFetch } from "@shared/api/fetcher";
import { Contact } from "@model/index";
import { ServiceIcon } from "@shared/ui/ServiceIcon";
import classes from "./ContactsSection.module.css";

const ContactsPlaceholder: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={classes.contactsPlaceholder}>{children}</div>
);

const ContactLinkItem: FC<{ contact: Contact }> = ({ contact }) => (
  <a
    href={contact.link}
    target="_blank"
    rel="noopener noreferrer"
    className={classes.contactLink}
  >
    <ServiceIcon service={contact.name} size={32} className={classes.contactIcon} />
    <span className={classes.contactName}>{contact.name}</span>
  </a>
);

export const ContactsSection = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactsError, setContactsError] = useState<string | null>(null);
  const [contactsLoading, setContactsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await apiFetch<Contact[]>("/api/contacts");
        setContacts(data);
      } catch (error) {
        console.error("Failed to load contacts:", error);
        setContactsError("Не удалось загрузить контакты");
      } finally {
        setContactsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const renderContent = () => {
    if (contactsLoading) {
      return <ContactsPlaceholder>Loading contacts…</ContactsPlaceholder>;
    }

    if (contactsError) {
      return <ContactsPlaceholder>{contactsError}</ContactsPlaceholder>;
    }

    if (contacts.length === 0) {
      return <ContactsPlaceholder>Contacts will appear here soon</ContactsPlaceholder>;
    }

    return (
      <div className={classes.contactsList}>
        {contacts.map((contact) => (
          <ContactLinkItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
  };

  return (
    <section id="contacts" className={classes.section}>
      <h2 className={classes.sectionTitle}>Contacts</h2>
      {renderContent()}
    </section>
  );
};

