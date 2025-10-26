import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.99976 7H15.9998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.99976 11H11.9998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.9955 22.0015H6C4.89421 22.0015 3.99828 21.1042 4 19.9984L4.02496 3.99688C4.02668 2.89353 4.92161 2 6.02496 2H17.9969C19.1014 2 19.9969 2.89543 19.9969 4V15.0145L12.9955 22.0015Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 15H15C13.8954 15 13 15.8954 13 17V22', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'File01',
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
            _hoisted4
        ])
    }
})
