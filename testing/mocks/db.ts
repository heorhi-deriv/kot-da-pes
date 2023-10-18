import { uid } from '@/utils/uid';
import { factory, primaryKey } from '@mswjs/data';

const models = {
    job: {
        createdAt: Date.now,
        department: String,
        id: primaryKey(uid),
        info: String,
        location: String,
        organizationId: String,
        position: String,
    },
    organization: {
        adminId: String,
        createdAt: Date.now,
        email: String,
        id: primaryKey(uid),
        info: String,
        name: String,
        phone: String,
    },
    user: {
        createdAt: Date.now,
        email: String,
        id: primaryKey(uid),
        organizationId: String,
        password: String,
    },
};

export const db = factory(models);
