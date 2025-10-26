import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6L12.8944 10.5528C12.3314 10.8343 11.6686 10.8343 11.1056 10.5528L2 6', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.0002 19.7727C19.7676 19.7727 21.2002 18.3075 21.2002 16.5C21.2002 14.6925 19.7676 13.2273 18.0002 13.2273M18.0002 19.7727C16.2329 19.7727 14.8002 18.3075 14.8002 16.5C14.8002 14.6925 16.2329 13.2273 18.0002 13.2273M18.0002 19.7727V21M18.0002 13.2273V12M15.0915 14.7149L14.0007 14.0455M22.0002 18.9545L20.9094 18.2851M20.9089 14.7149L21.9998 14.0455M14.0002 18.9545L15.0911 18.2851', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'MailSetting01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
