import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;

const IntegrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
`;

const IntegrationCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IntegrationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const IntegrationIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const IntegrationInfo = styled.div`
  flex: 1;
`;

const IntegrationName = styled.h3`
  margin: 0 0 4px;
  color: #1f2937;
  font-size: 18px;
`;

const IntegrationStatus = styled.div<{ connected: boolean }>`
  font-size: 14px;
  color: ${props => props.connected ? '#059669' : '#6b7280'};
  font-weight: 500;
`;

const IntegrationDescription = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0 0 16px;
  line-height: 1.5;
`;

const ActionButton = styled.button<{ connected: boolean }>`
  background: ${props => props.connected ? '#dc2626' : '#3b82f6'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.connected ? '#b91c1c' : '#2563eb'};
  }
`;

const integrations = [
  {
    id: 1,
    name: 'Slack',
    icon: '💬',
    description: 'Get notifications and alerts directly in your Slack workspace.',
    connected: true
  },
  {
    id: 2,
    name: 'Google Analytics',
    icon: '📊',
    description: 'Track website performance and user behavior with Google Analytics.',
    connected: false
  },
  {
    id: 3,
    name: 'Stripe',
    icon: '💳',
    description: 'Process payments and manage subscriptions with Stripe.',
    connected: true
  },
  {
    id: 4,
    name: 'Mailchimp',
    icon: '📧',
    description: 'Sync contacts and manage email marketing campaigns.',
    connected: false
  },
  {
    id: 5,
    name: 'GitHub',
    icon: '🐙',
    description: 'Connect your repositories and manage deployments.',
    connected: true
  },
  {
    id: 6,
    name: 'Zapier',
    icon: '⚡',
    description: 'Automate workflows between your favorite apps.',
    connected: false
  }
];

const Integrations: React.FC = () => {
  const handleToggleIntegration = (id: number, connected: boolean) => {
    const action = connected ? 'disconnect' : 'connect';
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} integration (This is a demo)`);
  };

  return (
    <Container>
      <Title>🔗 Integrations</Title>
      
      <IntegrationGrid>
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id}>
            <IntegrationHeader>
              <IntegrationIcon>{integration.icon}</IntegrationIcon>
              <IntegrationInfo>
                <IntegrationName>{integration.name}</IntegrationName>
                <IntegrationStatus connected={integration.connected}>
                  {integration.connected ? 'Connected' : 'Not Connected'}
                </IntegrationStatus>
              </IntegrationInfo>
            </IntegrationHeader>
            
            <IntegrationDescription>
              {integration.description}
            </IntegrationDescription>
            
            <ActionButton
              connected={integration.connected}
              onClick={() => handleToggleIntegration(integration.id, integration.connected)}
            >
              {integration.connected ? 'Disconnect' : 'Connect'}
            </ActionButton>
          </IntegrationCard>
        ))}
      </IntegrationGrid>
    </Container>
  );
};

export default Integrations;

