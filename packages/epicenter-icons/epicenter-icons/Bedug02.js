import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 3C8.46579 2.37764 10.3912 2 12.5 2C14.6088 2 16.5342 2.37764 18 3C20.5 4 22 6.13401 22 10C22 13.866 20.5 16 18 17C16.5342 17.6224 14.6088 18 12.5 18C10.3912 18 8.46579 17.6224 7 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 22L18 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10C3 6.13401 4.79086 3 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C5.51321 17 4.21588 15.5804 3.52643 13.4736', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 22L16 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2 15L7 10M7.5 10C7.5 10.2761 7.27614 10.5 7 10.5C6.72386 10.5 6.5 10.2761 6.5 10C6.5 9.72386 6.72386 9.5 7 9.5C7.27614 9.5 7.5 9.72386 7.5 10Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Bedug02',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
