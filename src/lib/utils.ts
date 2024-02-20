export function serializeNonPOJOs<Type>(obj: Type): Type {
	return structuredClone(obj);
}
