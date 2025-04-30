import React from 'react';

export default function ContactMap() {
  return (
    <div className="bg-white/5 rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Location</h2>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8876033475424!2d55.1373!3d25.0657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dcc1e6c3c63%3A0x3c8d0d24a9e76e87!2sJumeirah%20Business%20Center%202%20-%20Cluster%20V%20-%20Jumeirah%20Lakes%20Towers%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1629789012345!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ConvoFlow Office Location"
        />
      </div>
    </div>
  );
}