import View from './views/view';

const CssClasses = {
    ERROR: 'not-found',
};
const TEXT_NOT_FOUND = 'Ошибка. Страница не найдена.';

export default class NotFoundView extends View {
    params!: { tag: 'section', classNames: string[] };

    constructor() {
        const params = {
            tag: 'section',
            classNames: [CssClasses.ERROR],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.elementCreator.setTextContent(TEXT_NOT_FOUND);
    }
}