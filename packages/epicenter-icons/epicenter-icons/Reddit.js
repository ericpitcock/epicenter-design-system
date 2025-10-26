import { defineComponent, h } from 'vue'

const _hoisted1 = h('ellipse', { 'cx': '12', 'cy': '15.5', 'rx': '9', 'ry': '6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 16.7803C14.5149 17.548 13.3062 18.0002 12 18.0002C10.6938 18.0002 9.48512 17.548 8.5 16.7803', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '19', 'cy': '4', 'r': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 10.0694C18.3687 9.43053 19.0634 9 19.8595 9C21.0417 9 22 9.94921 22 11.1201C22 11.937 21.5336 12.6459 20.8502 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 10.0694C5.63125 9.43053 4.93663 9 4.14048 9C2.95833 9 2 9.94921 2 11.1201C2 11.937 2.4664 12.6459 3.14981 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 9V6C12 4.89543 12.8954 4 14 4H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M9.00801 13L8.99902 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M15.008 13L14.999 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Reddit',
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
            _hoisted6,
            _hoisted7,
            _hoisted8
        ])
    }
})
