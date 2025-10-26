import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z' })
const _hoisted2 = h('path', { 'd': 'M22 18.5V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12.2598V8.74026C18.429 8.74026 16.7572 5.96405 18.0588 3.75986L14.9412 2.00009C13.6234 4.23152 10.378 4.23143 9.06027 2L5.94258 3.75978C7.24427 5.964 5.57105 8.74026 3 8.74026V12.2598C5.57101 12.2598 7.24283 15.036 5.94115 17.2402L9.05885 19C10.3772 16.7675 13.6242 16.7674 14.9426 18.9999L18.0603 17.2401C16.7586 15.036 18.429 12.2598 21 12.2598Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InstallingUpdates02',
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
