import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 17H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 17H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 5C13.8807 5 15 6.11929 15 7.5C15 8.88071 13.8807 10 12.5 10C11.1193 10 10 8.88071 10 7.5C10 6.11929 11.1193 5 12.5 5ZM12.5 5C12.6667 4.5 13.4 3.4 15 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 7.3125L16.3535 6.72034C17.2899 6.31066 18.3845 6.67295 18.8916 7.56037L22 13H16V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V13H2L10.5 9.28125', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M22 13V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V13', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheeseCake01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
