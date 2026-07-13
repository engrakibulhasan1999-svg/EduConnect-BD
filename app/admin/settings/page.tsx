"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/lib/context/toast-context";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const { showToast } = useToast();
  const [settings, setSettings] = useState({
    siteName: "EduConnect BD",
    email: "info@educonnect.bd",
    phone: "+880 1712-345678",
    address: "House 12, Road 5, Dhanmondi, Dhaka 1205",
    whatsapp: "8801712345678",
    facebook: "https://facebook.com/educonnectbd",
    youtube: "https://youtube.com/educonnectbd",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("educonnect_settings", JSON.stringify(settings));
    showToast("Settings saved successfully!", "success");
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-text dark:text-white">Website Settings</h2>
      <Card>
        <form onSubmit={handleSave} className="space-y-4 max-w-lg">
          <Input
            label="Site Name"
            id="site-name"
            value={settings.siteName}
            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
          />
          <Input
            label="Contact Email"
            id="site-email"
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
          />
          <Input
            label="Phone"
            id="site-phone"
            value={settings.phone}
            onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
          />
          <Input
            label="Address"
            id="site-address"
            value={settings.address}
            onChange={(e) => setSettings({ ...settings, address: e.target.value })}
          />
          <Input
            label="WhatsApp Number"
            id="site-whatsapp"
            value={settings.whatsapp}
            onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
          />
          <Input
            label="Facebook URL"
            id="site-facebook"
            value={settings.facebook}
            onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
          />
          <Input
            label="YouTube URL"
            id="site-youtube"
            value={settings.youtube}
            onChange={(e) => setSettings({ ...settings, youtube: e.target.value })}
          />
          <Button type="submit">
            <Save className="h-4 w-4" /> Save Settings
          </Button>
        </form>
      </Card>
    </div>
  );
}
