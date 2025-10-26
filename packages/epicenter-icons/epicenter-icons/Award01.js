import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12V18', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.9996 22H8C8 19.791 9.79087 18 11.9999 18C14.209 18 15.9998 19.7909 15.9996 22Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 2H19V5C19 8.86599 15.866 12 12 12C8.13401 12 5 8.86599 5 5V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 5H2C2 8 3 10 4.5 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19 5H22C22 8 21 10 19.5 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Award01',
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
