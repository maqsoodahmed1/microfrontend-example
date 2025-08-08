import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;

const SettingsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 16px;
  color: #1f2937;
  font-size: 18px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ToggleInfo = styled.div`
  flex: 1;
`;

const ToggleLabel = styled.div`
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 4px;
`;

const ToggleDescription = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #3b82f6;
  }
  
  &:checked + span:before {
    transform: translateX(24px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  transition: 0.2s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

const PasswordSection = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  max-width: 400px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2563eb;
  }
`;

const Security: React.FC = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    smsNotifications: false,
    emailNotifications: true,
    loginAlerts: true,
    sessionTimeout: false
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <Container>
      <Title>🔒 Security Settings</Title>
      
      <SettingsSection>
        <SectionTitle>Authentication</SectionTitle>
        
        <ToggleContainer>
          <ToggleInfo>
            <ToggleLabel>Two-Factor Authentication</ToggleLabel>
            <ToggleDescription>Add an extra layer of security to your account</ToggleDescription>
          </ToggleInfo>
          <Toggle>
            <ToggleInput
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={() => handleToggle('twoFactorAuth')}
            />
            <ToggleSlider />
          </Toggle>
        </ToggleContainer>

        <ToggleContainer>
          <ToggleInfo>
            <ToggleLabel>SMS Notifications</ToggleLabel>
            <ToggleDescription>Receive security alerts via SMS</ToggleDescription>
          </ToggleInfo>
          <Toggle>
            <ToggleInput
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={() => handleToggle('smsNotifications')}
            />
            <ToggleSlider />
          </Toggle>
        </ToggleContainer>

        <ToggleContainer>
          <ToggleInfo>
            <ToggleLabel>Email Notifications</ToggleLabel>
            <ToggleDescription>Receive security alerts via email</ToggleDescription>
          </ToggleInfo>
          <Toggle>
            <ToggleInput
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
            <ToggleSlider />
          </Toggle>
        </ToggleContainer>

        <ToggleContainer>
          <ToggleInfo>
            <ToggleLabel>Login Alerts</ToggleLabel>
            <ToggleDescription>Get notified when someone logs into your account</ToggleDescription>
          </ToggleInfo>
          <Toggle>
            <ToggleInput
              type="checkbox"
              checked={settings.loginAlerts}
              onChange={() => handleToggle('loginAlerts')}
            />
            <ToggleSlider />
          </Toggle>
        </ToggleContainer>

        <ToggleContainer>
          <ToggleInfo>
            <ToggleLabel>Automatic Session Timeout</ToggleLabel>
            <ToggleDescription>Automatically log out after 30 minutes of inactivity</ToggleDescription>
          </ToggleInfo>
          <Toggle>
            <ToggleInput
              type="checkbox"
              checked={settings.sessionTimeout}
              onChange={() => handleToggle('sessionTimeout')}
            />
            <ToggleSlider />
          </Toggle>
        </ToggleContainer>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Change Password</SectionTitle>
        <PasswordSection>
          <FormGroup>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input type="password" id="currentPassword" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input type="password" id="newPassword" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input type="password" id="confirmPassword" />
          </FormGroup>
          
          <Button>Update Password</Button>
        </PasswordSection>
      </SettingsSection>
    </Container>
  );
};

export default Security;

