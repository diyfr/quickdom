/**
 * Les options de création pour les éléments HTML
 */
export type ElementOptions<K extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[K]> & {
    [attr: string]: any; // Permettre des attributs personnalisés
};

export class QuickDom {
    /**
     * 
     * @param name Nom de l'élément HTML ex: div, span, ...
     * @param options  Options (id, className, classList et autres attributs spécifiques)
     * @returns HTMLElement 
     */
    public static new<K extends keyof HTMLElementTagNameMap>(name: K, options?: ElementOptions<K>): HTMLElementTagNameMap[K] {
        let el = document.createElement(name);
        QuickDom.setOptions(el, options);
        return el;
    }

    /**
     * Permet d'affecter les options à l'élément html
     * @param el Element HTML
     * @param options Options à affecter 
     */
    private static setOptions<K extends keyof HTMLElementTagNameMap>(el: HTMLElementTagNameMap[K], options?: ElementOptions<K>): void {
        if (options) {
            // Assign all attributes
            for (const [key, value] of Object.entries(options)) {
                if (value !== undefined) {
                    if (key in el) {
                        (el as any)[key] = value;
                    } else {
                        el.setAttribute(key, value);
                    }
                }
            }
        }
    }
}

/**
 * Création d'un nouvel élément HTML
 */
export const qd = QuickDom.new;