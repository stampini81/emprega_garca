import { DataPagination } from '../data-pagination';

export interface Ombudsman {
  id: number;
  publicId: string;
  reportedName?: string;
  reportedRole?: string;
  description: string;
  type: string;
  read: boolean;
  readAt: any;
  createdAt: string;
  updatedAt: string;
  files: File[];
}

export interface File {
  id: number;
  publicId: string;
  createdAt: string;
  updatedAt: string;
  ombudsmanId: number;
  filePath: string;
}

export type OmbudsmanPaginated = DataPagination<Ombudsman>;
