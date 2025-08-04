import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export const getGetnetSpec = () => {
  const filePath = path.join(process.cwd(), 'docs', 'getnet.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return YAML.parse(fileContents);
};
