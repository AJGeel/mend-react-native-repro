import { Alert } from 'react-native';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch('https://example.com/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(`Login failed: ${error}`); // 🚨 Exposes backend error details in logs
    Alert.alert(`Login failed: :${error}`); // 🚨 Exposes backend error details to end-users
  }
};

export const fetchDataWithInsecureCookies = async () => {
  const response = await fetch('https://api.sampleapis.com/coffee/hot', {
    method: 'GET',
    credentials: 'include', // 🚨 Allows insecure cookies to be sent
    headers: {
      Accept: 'application/json',
    },
  });

  Alert.alert('Just fetched data with insecure cookies 🍪');

  return response.json();
};

export const authenticateUser = async (username: string) => {
  const ldapQuery = `(&(uid=${username}))`; // 🚨 User input directly injected into query

  const response = await fetch('https://example.com/ldap-auth', {
    method: 'POST',
    body: JSON.stringify({ query: ldapQuery }),
  });

  Alert.alert('Potentially authenticated this person as root');

  return response.json();
};

// 🚨 CWE-1333: Regex Denial of Service (ReDoS)
export const regexDenialExport = () => {
  const regex = /^(a+)+$/; // Vulnerable regex
  const input = 'a'.repeat(214700000);
  // Large input

  Alert.alert(String(regex.test(input)));
};

// 🚨 CWE-338: Weak Pseudo-Random
export const weakPseudoRandomNumberGenerator = () =>
  Math.random().toString(36).slice(-8);
