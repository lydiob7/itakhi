export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
    public: {
        Tables: {
            Users: {
                Row: {
                    avatar_url: string | null;
                    created_at: string;
                    email: string;
                    first_name: string | null;
                    id: string;
                    last_name: string | null;
                };
                Insert: {
                    avatar_url?: string | null;
                    created_at?: string;
                    email: string;
                    first_name?: string | null;
                    id: string;
                    last_name?: string | null;
                };
                Update: {
                    avatar_url?: string | null;
                    created_at?: string;
                    email?: string;
                    first_name?: string | null;
                    id?: string;
                    last_name?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "Users_id_fkey";
                        columns: ["id"];
                        referencedRelation: "users";
                        referencedColumns: ["id"];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
