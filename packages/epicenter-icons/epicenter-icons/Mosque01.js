import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 12V10C18.5 9.44772 18.0523 9 17.5 9H7.5C6.94772 9 6.5 9.44772 6.5 10V12', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 13C20.5 12.4477 20.0523 12 19.5 12H5.5C4.94772 12 4.5 12.4477 4.5 13V22H20.5V13Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.0001 22V19C9.98279 16 12.5 15 12.5 15C12.5 15 15.0172 16 14.9999 19V22' })
const _hoisted4 = h('path', { 'd': 'M8.99231 9C8.38588 8.01654 7.99218 7.5 8.00012 6.5C7.99218 4 11 3.5 12.5 2C14 3.5 17.0081 4 17.0001 6.5C17.0081 7.5 16.6144 8.01654 16.0079 9', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mosque01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
